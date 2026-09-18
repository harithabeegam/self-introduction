import './SelfIntroduction.css'

const profile = {
  name: 'Beegam haritha',
  role: 'Python developer',
  initials: 'BH',
  education: 'BE in electronics and communication engineering from RLJIT college, bangalore.',
  experience:
    '1.5 years building dashboards and internal tools at a fintech startup, focused on React and design systems.',
  skills: ['React', 'JavaScript', 'CSS', 'Git', 'Figma', 'Node.js'],
  hobbies: ['Sketching', 'Trail running', 'Board games', 'Cooking'],
  goal: 'Grow into a product-minded engineer who ships interfaces people actually enjoy using.',
}

function SelfIntroduction() {
  return (
    <section className="intro-card" aria-label="Self introduction">
      <div className="intro-header">
        <div className="intro-avatar">{profile.initials}</div>
        <div>
          <h1 className="intro-name">{profile.name}</h1>
          <p className="intro-role">{profile.role}</p>
        </div>
      </div>

      <div className="intro-divider" />

      <div className="intro-section">
        <h2>Education</h2>
        <p>{profile.education}</p>
      </div>

      <div className="intro-section">
        <h2>Experience</h2>
        <p>{profile.experience}</p>
      </div>

      <div className="intro-section">
        <h2>Skills</h2>
        <ul className="intro-tags">
          {profile.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="intro-section">
        <h2>Hobbies &amp; interests</h2>
        <ul className="intro-tags intro-tags--muted">
          {profile.hobbies.map((hobby) => (
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>
      </div>

      <div className="intro-divider" />

      <div className="intro-goal">
        <span className="intro-goal-label">Career goal</span>
        <p>{profile.goal}</p>
      </div>
    </section>
  )
}

export default SelfIntroduction