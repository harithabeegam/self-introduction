function UserSettings() {
  return (
    <div className="user-settings">

      <h2>User Settings</h2>

      <div className="settings-card">

        <div className="setting-item">
          <div>
            <h3>Email Notifications</h3>
            <p>Receive important updates through email.</p>
          </div>

          <input type="checkbox" defaultChecked />
        </div>

        <div className="setting-item">
          <div>
            <h3>Profile Visibility</h3>
            <p>Allow other users to view your profile.</p>
          </div>

          <input type="checkbox" defaultChecked />
        </div>

        <div className="setting-item">
          <div>
            <h3>Account Updates</h3>
            <p>Receive notifications about account activity.</p>
          </div>

          <input type="checkbox" />
        </div>

      </div>

    </div>
  );
}

export default UserSettings;