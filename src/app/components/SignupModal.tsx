import { X, Rocket, Phone, Mail, User } from 'lucide-react';
import { useState } from 'react';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000';

export function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch(`${API_BASE}/api/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.error('Erro ao salvar lead no backend', err);
    } finally {
      setIsSubmitting(false);
    }
    
    // Formatar mensagem para WhatsApp
    const message = `Olá! Vim da landing page do CRM-Startweb Bootcamp.
    
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Nível de experiência: ${formData.experience}

Gostaria de saber mais sobre o bootcamp!`;

    // Número de WhatsApp (substitua pelo número real)
    const whatsappNumber = '5511999999999'; // Formato: código do país + DDD + número
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Abrir WhatsApp em nova aba
    window.open(whatsappUrl, '_blank');
    
    // Fechar modal
    onClose();
    
    // Resetar formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      experience: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-background rounded-2xl shadow-2xl max-w-md w-full relative animate-in fade-in zoom-in duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-muted rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-t-2xl text-white">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <Rocket className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Garantir Minha Vaga</h2>
          </div>
          <p className="text-white/90">
            Preencha os dados abaixo e fale diretamente conosco no WhatsApp!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-5">
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
              className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
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
              className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
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
              className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
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
              className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
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
            disabled={isSubmitting}
            className="w-full px-6 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg shadow-primary/25 font-semibold disabled:opacity-70"
          >
            <Phone className="w-5 h-5" />
            {isSubmitting ? 'Enviando...' : 'Continuar no WhatsApp'}
          </button>

          <p className="text-xs text-muted-foreground text-center">
            Ao enviar, você será redirecionado para o WhatsApp para falar com nossa equipe.
          </p>
        </form>
      </div>
    </div>
  );
}
