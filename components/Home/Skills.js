import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <div className="skills-section">
      {/* Title */}
      <h2 className="section-title mb-4">Mes compétences</h2>

      {/* Content */}
      <div>
        {skills.map((skill) => (
          <div key={skill.id} className="skill-item mb-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <label id={`skill-label-${skill.id}`} className="skill-label">
                {skill.name}
              </label>
              <span className="skill-percentage">{skill.percentage}%</span>
            </div>
            <div
              className="progress"
              role="progressbar"
              aria-labelledby={`skill-label-${skill.id}`}
              aria-valuenow={skill.percentage}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
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
