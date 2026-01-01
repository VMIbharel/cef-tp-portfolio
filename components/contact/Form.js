import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Fonction de validation du formulaire
  const validateForm = () => {
    const newErrors = {};

    if (!formData.nom.trim()) {
      newErrors.nom = 'Le nom est obligatoire';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est obligatoire';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Veuillez entrer un email valide';
    }

    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Le téléphone est obligatoire';
    } else if (!/^[\d\s\-\+\.]{10,}$/.test(formData.telephone.replace(/\s/g, ''))) {
      newErrors.telephone = 'Veuillez entrer un téléphone valide';
    }

    if (!formData.sujet.trim()) {
      newErrors.sujet = 'Le sujet est obligatoire';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est obligatoire';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Effacer l'erreur du champ lors de la modification
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      // Simulation d'un délai d'envoi
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSuccessMessage('Votre message a été envoyé avec succès ! Merci de nous avoir contactés.');
      setFormData({ nom: '', email: '', telephone: '', sujet: '', message: '' });
      setErrors({});
    } catch (error) {
      setErrors({ submit: 'Une erreur est survenue. Veuillez réessayer.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="contact-form">
      {successMessage && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          {successMessage}
          <button
            type="button"
            className="btn-close"
            onClick={() => setSuccessMessage('')}
            aria-label="Fermer"
          />
        </div>
      )}

      {/*  Erreur de soumission générale */}
      {errors.submit && (
        <div className="alert alert-danger" role="alert">
          {errors.submit}
        </div>
      )}

      {/* Nom */}
      <div className="mb-3">
        <label htmlFor="nom" className="form-label">
          Votre nom
        </label>
        <input
          type="text"
          className={`form-control ${errors.nom ? 'is-invalid' : ''}`}
          id="nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          required
          aria-describedby="nomError"
        />
        {errors.nom && (
          <div id="nomError" className="invalid-feedback d-block">
            {errors.nom}
          </div>
        )}
      </div>

      {/* Adress mail */}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Votre adresse email
        </label>
        <input
          type="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          aria-describedby="emailError"
        />
        {errors.email && (
          <div id="emailError" className="invalid-feedback d-block">
            {errors.email}
          </div>
        )}
      </div>

      {/* Numéro */}
      <div className="mb-3">
        <label htmlFor="telephone" className="form-label">
          Votre numéro de téléphone
        </label>
        <input
          type="tel"
          className={`form-control ${errors.telephone ? 'is-invalid' : ''}`}
          id="telephone"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          required
          aria-describedby="telephoneError"
        />
        {errors.telephone && (
          <div id="telephoneError" className="invalid-feedback d-block">
            {errors.telephone}
          </div>
        )}
      </div>

      {/* Sujet */}
      <div className="mb-3">
        <label htmlFor="sujet" className="form-label">
          Sujet
        </label>
        <input
          type="text"
          className={`form-control ${errors.sujet ? 'is-invalid' : ''}`}
          id="sujet"
          name="sujet"
          value={formData.sujet}
          onChange={handleChange}
          required
          aria-describedby="sujetError"
        />
        {errors.sujet && (
          <div id="sujetError" className="invalid-feedback d-block">
            {errors.sujet}
          </div>
        )}
      </div>

      {/* Message */}
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Votre message
        </label>
        <textarea
          className={`form-control ${errors.message ? 'is-invalid' : ''}`}
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          aria-describedby="messageError"
        />
        {errors.message && (
          <div id="messageError" className="invalid-feedback d-block">
            {errors.message}
          </div>
        )}
      </div>

      {/* Submit */}
      <div className="text-center">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isLoading}
          aria-busy={isLoading}
        >
          {isLoading ? 'Envoi en cours...' : 'Envoyer'}
        </button>
      </div>
    </form>
  );
}
