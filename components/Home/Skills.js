export default function Skills() {
  const skills = [
    {
      id: 1,
      name: "HTML5",
      percentage: 90,
      color: "danger",
    },
    {
      id: 2,
      name: "CSS3",
      percentage: 80,
      color: "info",
    },
    {
      id: 3,
      name: "JAVASCRIPT",
      percentage: 70,
      color: "warning",
    },
    {
      id: 4,
      name: "PHP",
      percentage: 60,
      color: "success",
    },
    {
      id: 5,
      name: "REACT",
      percentage: 50,
      color: "primary",
    },
  ];

  return (
    <div className="skills-section">
      {/* Title */}
      <h2 className="section-title mb-4">Mes compétences</h2>

      {/* Content */}
      <div>
        {skills.map((skill) => (
          <div key={skill.id} className="skill-item mb-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <label htmlFor={`skill-${skill.id}`} className="skill-label">
                {skill.name}
              </label>
              <span className="skill-percentage">{skill.percentage}%</span>
            </div>
            <div
              className="progress"
              role="progressbar"
              aria-valuenow={skill.percentage}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${skill.name}: ${skill.percentage}%`}
            >
              <div
                id={`skill-${skill.id}`}
                className={`progress-bar bg-${skill.color}`}
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
