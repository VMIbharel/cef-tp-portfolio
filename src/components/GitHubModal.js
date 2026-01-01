import { useState, useEffect } from 'react';

export default function GitHubModal({ isOpen, onClose }) {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isOpen) return;

    const fetchGithubData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("https://api.github.com/users/github-john-doe");

        if (!response.ok) {
          throw new Error("Impossible de récupérer les données GitHub");
        }

        const data = await response.json();
        setGithubData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Modal backdrop */}
      <div
        className="modal-backdrop fade show"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div
        className="modal fade show d-block"
        role="dialog"
        aria-labelledby="githubModalLabel"
        aria-modal="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content bg-dark text-white">
            {/* Modal header */}
            <div className="modal-header github-modal-header">
              <h1 className="modal-title fs-5" id="githubModalLabel">
                Mon profil GitHub
              </h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                aria-label="Fermer la modale"
                onClick={onClose}
              ></button>
            </div>

            {/* Modal body */}
            <div className="modal-body github-modal-body">
              {/* Loading state */}
              {loading && (
                <div className="text-center py-4">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Chargement...</span>
                  </div>
                  <p className="mt-3">Chargement du profil GitHub...</p>
                </div>
              )}

              {/* Error state */}
              {error && (
                <div className="alert alert-danger" role="alert">
                  <strong>Erreur :</strong> {error}
                </div>
              )}

              {/* GitHub profile content */}
              {githubData && !loading && (
                <div className="row g-4 align-items-md-start">
                  {/* Avatar column */}
                  <div className="col-12 col-md-4 text-center">
                    <img
                      src={githubData.avatar_url}
                      alt={`Avatar de ${githubData.name || githubData.login}`}
                      style={{ width: '180px', height: '180px', borderRadius: '50%' }}
                      className="img-fluid"
                    />
                  </div>

                  {/* Info column */}
                  <div className="col-12 col-md-8">
                    {/* Bio */}
                    <div className="small">
                      <p className="mb-0 pb-y github-info-item">
                        <i className="bi bi-person me-2"></i> {githubData.name || githubData.login}
                      </p>
                      {githubData.location && (
                        <p className="mb-0 py-2 github-info-item">
                          <i className="bi bi-geo-alt-fill me-2"></i> {githubData.location}
                        </p>
                      )}
                      {githubData.bio && (
                        <p className="mb-0 py-2 github-info-item">
                          <i className="bi bi-card-text me-2"></i> {githubData.bio}
                        </p>
                      )}
                      <p className="mb-0 py-2 github-info-item">
                        <i className="bi bi-git me-2"></i> Repositories : {githubData.public_repos}
                      </p>
                      <p className="mb-0 py-2 github-info-item">
                        <i className="bi bi-people me-2"></i> Followers : {githubData.followers}
                      </p>
                      <p className="mb-0">
                        <i className="bi bi-person-check me-2"></i> Following : {githubData.following}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal footer */}
            <div className="modal-footer github-modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
