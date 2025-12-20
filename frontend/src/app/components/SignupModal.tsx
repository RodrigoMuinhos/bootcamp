import { X, Rocket, Phone, Mail, User, Fingerprint, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    experience: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  if (!isOpen) return null;

  const onlyDigits = (s: string) => s.replace(/\D/g, '');

  const formatPhone = (value: string) => {
    const digits = onlyDigits(value).slice(0, 11);
    const parts = [] as string[];
    if (digits.length > 0) {
      parts.push('(' + digits.slice(0, 2) + ')');
    }
    if (digits.length >= 7) {
      parts.push(' ' + digits.slice(2, 7) + '-' + digits.slice(7));
    } else if (digits.length > 2) {
      parts.push(' ' + digits.slice(2));
    }
    return parts.join('');
  };

  const formatCPF = (value: string) => {
    const digits = onlyDigits(value).slice(0, 11);
    const p1 = digits.slice(0, 3);
    const p2 = digits.slice(3, 6);
    const p3 = digits.slice(6, 9);
    const p4 = digits.slice(9, 11);
    let out = '';
    if (p1) out += p1;
    if (p2) out += (out ? '.' : '') + p2;
    if (p3) out += (out ? '.' : '') + p3;
    if (p4) out += (out ? '-' : '') + p4;
    return out;
  };

  const validateCPF = (cpfDigits: string) => {
    const cpf = cpfDigits.replace(/\D/g, '');
    if (!cpf || cpf.length !== 11) return false;
    // reject sequences like 00000000000
    if (/^(\d)\1{10}$/.test(cpf)) return false;
    let sum = 0;
    for (let i = 0; i < 9; i++) sum += Number(cpf[i]) * (10 - i);
    let check = (sum * 10) % 11;
    if (check === 10 || check === 11) check = 0;
    if (check !== Number(cpf[9])) return false;
    sum = 0;
    for (let i = 0; i < 10; i++) sum += Number(cpf[i]) * (11 - i);
    check = (sum * 10) % 11;
    if (check === 10 || check === 11) check = 0;
    return check === Number(cpf[10]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const payload = {
        ...formData,
        phone: onlyDigits(formData.phone),
        cpf: onlyDigits(formData.cpf),
      };
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      console.log('Lead salvo com sucesso:', result);
      
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', cpf: '', experience: '' });
        setSubmitStatus('idle');
        onClose();
      }, 3000);
    } catch (err) {
      console.error('Erro ao salvar lead no backend', err);
      alert('Erro ao enviar seus dados. Por favor, tente novamente.');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      setFormData({ ...formData, phone: formatPhone(value) });
    } else if (name === 'cpf') {
      setFormData({ ...formData, cpf: formatCPF(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const phoneDigits = onlyDigits(formData.phone);
  const cpfDigits = onlyDigits(formData.cpf);
  const cpfIsValid = validateCPF(cpfDigits);
  const phoneIsValid = phoneDigits.length >= 10; // allow 10 or 11 digits

  if (submitStatus === 'success') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div className="bg-background rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 text-center animate-in fade-in zoom-in duration-200 mx-4">
          <div className="flex justify-center mb-6">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full animate-spin opacity-20"></div>
              <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-accent animate-bounce" />
              </div>
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Inscrição Recebida!</h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-6">
            Seus dados foram salvos com sucesso. Em breve entraremos em contato pelo WhatsApp para confirmar sua participação.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground/60">Aguarde...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-background rounded-2xl shadow-2xl max-w-md w-full relative animate-in fade-in zoom-in duration-200 my-4 sm:my-8 mx-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 hover:bg-muted rounded-lg transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-accent p-6 sm:p-8 rounded-t-2xl text-white">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 sm:p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">Garantir Minha Vaga</h2>
          </div>
          <p className="text-sm sm:text-base text-white/90">
            Preencha os dados abaixo e fale diretamente conosco no WhatsApp!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 sm:space-y-5">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <User className="w-4 h-4 text-primary" />
              Nome Completo
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Digite seu nome completo"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <Mail className="w-4 h-4 text-primary" />
              E-mail
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="seu@email.com"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <Phone className="w-4 h-4 text-primary" />
              WhatsApp
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="(11) 99999-9999"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            {!phoneIsValid && formData.phone && (
              <p className="text-xs text-destructive mt-1">Informe um número válido com DDD.</p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <Fingerprint className="w-4 h-4 text-primary" />
              CPF
            </label>
            <input
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              required
              placeholder="000.000.000-00"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            {formData.cpf && !cpfIsValid && (
              <p className="text-xs text-destructive mt-1">CPF inválido. Verifique e tente novamente.</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              Nível de Experiência
            </label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            >
              <option value="">Selecione...</option>
              <option value="Iniciante - Nunca programei">Iniciante - Nunca programei</option>
              <option value="Básico - Conheço o básico">Básico - Conheço o básico</option>
              <option value="Intermediário - Já fiz alguns projetos">Intermediário - Já fiz alguns projetos</option>
              <option value="Avançado - Trabalho na área">Avançado - Trabalho na área</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !cpfIsValid || !phoneIsValid}
            className="w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-xl transition-all duration-200 flex items-center justify-center gap-2 sm:gap-3 shadow-lg shadow-primary/25 font-semibold disabled:opacity-70"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            {isSubmitting ? 'Enviando...' : 'Solicitar Inscrição'}
          </button>

          <p className="text-xs text-muted-foreground text-center">
            Ao enviar, você será redirecionado para o WhatsApp para falar com nossa equipe.
          </p>
        </form>
      </div>
    </div>
  );
}
