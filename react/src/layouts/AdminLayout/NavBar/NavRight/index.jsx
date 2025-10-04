// react-bootstrap
import { ListGroup, Dropdown } from 'react-bootstrap';

// third party
import SimpleBar from 'simplebar-react';

// project import
import ActionItem from './ActionItem';

// assets
import avatar1 from 'assets/images/user/avatar-1.jpg';
import avatar2 from 'assets/images/user/avatar-2.jpg';
import avatar3 from 'assets/images/user/avatar-3.jpg';

// notifications data
const notifications = [
  {
    avatar: avatar2,
    title: (
      <>
        Keefe Bond <span className="text-body"> added new tags to </span> 💪 Design system
      </>
    ),
    messageRead: false,
    time: '2 min ago',
    message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    badge: 'Dashboard'
  },
  {
    icon: 'ph-duotone ph-chats-teardrop',
    background: 'bg-light-primary',
    title: 'Message',
    time: '1 hour ago',
    message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    messageRead: true
  },
  {
    icon: 'ph-duotone ph-user',
    background: 'bg-light-danger',
    title: 'Challenge invitation',
    time: '12 hour ago',
    message: 'Jonny aber invites to join the challenge',
    messageRead: true,
    buttons: [
      { label: 'Decline', variant: 'btn-outline-secondary' },
      { label: 'Accept', variant: 'btn-primary' }
    ]
  },
  {
    avatar: avatar2,
    title: (
      <>
        Keefe Bond <span className="text-body"> added new tags to </span> 💪 Design system
      </>
    ),
    time: '2 min ago',
    messageRead: true,
    message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    icon: 'ph-duotone ph-shield-checkered',
    background: 'bg-light-success',
    title: 'Security',
    time: '5 hour ago',
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    messageRead: true
  }
];

// profile dropdown item
const profile = [
  [
    { icon: 'ph-key', label: 'Change password' },
    {
      icon: 'ph-envelope-simple',
      label: 'Recently mail',
      subAvatars: [avatar1, avatar2, avatar3]
    },
    { icon: 'ph-calendar-blank', label: 'Schedule meetings' }
  ],
  [
    { icon: 'ph-heart', label: 'Favorite' },
    {
      icon: 'ph-arrow-circle-down',
      label: 'Download',
      badge: '10',
      badgeClasses: 'avatar avatar-xs rounded-circle bg-danger text-white'
    }
  ],
  [
    {
      icon: 'ph-globe-hemisphere-west',
      label: 'Languages',
      selectLang: ['English', 'Spain', 'Arabic']
    },
    { icon: 'ph-flag', label: 'Country' }
  ],
  [
    { icon: 'ph-user-circle', label: 'Edit profile' },
    {
      icon: 'ph-star text-warning',
      label: 'Upgrade account',
      badge: 'NEW',
      badgeClasses: 'badge bg-light-success border border-success ms-2'
    },
    { icon: 'ph-bell', label: 'Notifications' },
    { icon: 'ph-gear-six', label: 'Settings' }
  ],
  [
    { icon: 'ph-plus-circle', label: 'Add account' },
    { icon: 'ph-power', label: 'Logout' }
  ]
];

// -----------------------|| NAV RIGHT ||-----------------------//

export default function NavRight() {
  return (
    <ListGroup as="ul" bsPrefix=" " className="list-unstyled">
      <ListGroup.Item as="li" bsPrefix=" " className="pc-h-item pc-cart-menu">
        <Dropdown align="end">
          <Dropdown.Toggle as="a" variant="link" className="pc-head-link arrow-none me-0">
            <i className="ph-duotone ph-bell"></i>
            <span className="badge bg-danger pc-h-badge">3</span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="pc-h-dropdown dropdown-notification">
            <Dropdown.Header className="d-flex align-items-center justify-content-between">
              <h5 className="m-0">Notifications</h5>
              <div className="ms-auto">
                <button className="btn btn-sm btn-link-secondary">Read all</button>
              </div>
            </Dropdown.Header>
            <SimpleBar style={{ maxHeight: 'calc(100vh - 185px)' }}>
              <div className="dropdown-body text-wrap header-notification-scroll position-relative">
                <ul className="list-group list-group-flush w-100">
                  {notifications.map((item, index) => (
                    <li key={index} className={`${item.messageRead === true ? '' : 'unread'} list-group-item `}>
                      <div className="d-flex align-items-start">
                        <div className="flex-shrink-0 position-relative">
                          {item.avatar ? (
                            <img src={item.avatar} alt="user-avatar" className="user-avatar avatar avatar-s" />
                          ) : (
                            <div className={`avatar avatar-s ${item.background}`}>
                              {' '}
                              <i className={`${item.icon} f-18`} />
                            </div>
                          )}
                          {item.messageRead ? (
                            ''
                          ) : (
                            <div className="position-absolute top-50 end-100 translate-middle-y pe-2">
                              <i className="fas fa-circle text-success"></i>
                            </div>
                          )}
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <div className="d-flex">
                            <div className="flex-grow-1 me-3 position-relative">
                              <h6 className="mb-0 text-truncate">{item.title}</h6>
                            </div>
                            <div className="flex-shrink-0">
                              <span className="text-sm text-muted">{item.time}</span>
                            </div>
                          </div>
                          <p className="position-relative text-muted mt-1 mb-2">
                            <br />
                            <span className="text-truncate">{item.message}</span>
                          </p>
                          {item.badge && (
                            <span className="badge rounded-pill bg-light-warning border border-warning me-1 mt-1">{item.badge}</span>
                          )}
                          {item.buttons &&
                            item.buttons.map((btn, index) => (
                              <button key={index} className={`btn btn-sm ${btn.variant} me-2`}>
                                {btn.label}
                              </button>
                            ))}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </SimpleBar>
          </Dropdown.Menu>
        </Dropdown>
      </ListGroup.Item>
      <ListGroup.Item as="li" bsPrefix=" " className="pc-h-item">
        <Dropdown align="end">
          <Dropdown.Toggle as="a" variant="link" className="pc-head-link pc-head-link-text arrow-none me-0 user-name">
            <img src={avatar2} alt="user-image" className="user-avatar" />
            <span>
              <span className="user-name">Joseph William</span>
              <span className="user-desc">Administrator</span>
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="pc-h-dropdown dropdown-user-profile">
            <Dropdown.Header className="r d-flex align-items-center justify-content-between">
              <h5 className="m-0">Profile</h5>
            </Dropdown.Header>
            <SimpleBar style={{ maxHeight: 'calc(100vh - 225px)' }}>
              <div className="dropdown-body profile-notification-scroll">
                <ul className="list-group list-group-flush w-100">
                  <li className="list-group-item">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img src={avatar2} alt="user" className="wid-50 rounded-circle" />
                      </div>
                      <div className="flex-grow-1 mx-3">
                        <h5 className="mb-0">Carson Darrin</h5>
                        <a className="text-sm link-secondary" href="mailto:carson.darrin@company.io">
                          carson.darrin@company.io
                        </a>
                      </div>
                      <span className="badge bg-primary">PRO</span>
                    </div>
                  </li>
                  {profile.map((group, groupIdx) => (
                    <li className="list-group-item item-actions" key={groupIdx}>
                      {group.map((item, idx) => (
                        <ActionItem key={idx} item={item} />
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
            </SimpleBar>
          </Dropdown.Menu>
        </Dropdown>
      </ListGroup.Item>
    </ListGroup>
  );
}
