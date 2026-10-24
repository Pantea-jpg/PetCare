import "./Dashboard.css";

const stats = [
  {
    id: 1,
    title: "My Pets",
    value: "2",
    description: "Happy companions",
    icon: "🐾",
  },
  {
    id: 2,
    title: "Today's Feedings",
    value: "3/4",
    description: "Feedings completed",
    icon: "🍽️",
  },
  {
    id: 3,
    title: "Health Records",
    value: "5",
    description: "Records available",
    icon: "💗",
  },
  {
    id: 4,
    title: "Upcoming Events",
    value: "2",
    description: "Events this week",
    icon: "📅",
  },
];

const feedings = [
  {
    id: 1,
    petName: "Luna",
    meal: "Breakfast",
    time: "08:00 AM",
    status: "Completed",
  },
  {
    id: 2,
    petName: "Luna",
    meal: "Lunch",
    time: "01:00 PM",
    status: "Upcoming",
  },
  {
    id: 3,
    petName: "Max",
    meal: "Lunch",
    time: "01:30 PM",
    status: "Upcoming",
  },
  {
    id: 4,
    petName: "Luna",
    meal: "Dinner",
    time: "07:00 PM",
    status: "Upcoming",
  },
];

const events = [
  {
    id: 1,
    title: "Vet Appointment",
    petName: "Luna",
    date: "Oct 26",
    type: "Health",
  },
  {
    id: 2,
    title: "Vaccination",
    petName: "Max",
    date: "Nov 02",
    type: "Health",
  },
  {
    id: 3,
    title: "Grooming",
    petName: "Luna",
    date: "Nov 05",
    type: "Care",
  },
];

const pets = [
  {
    id: 1,
    name: "Luna",
    species: "Cat",
    breed: "Persian",
    age: "2 years old",
    emoji: "🐱",
  },
  {
    id: 2,
    name: "Max",
    species: "Dog",
    breed: "Golden Retriever",
    age: "3 years old",
    emoji: "🐶",
  },
];

export default function Dashboard() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="dashboard">

      <section className="dashboard__welcome">
        <div>
          <h1>Welcome back, Pet Parent! 🐾</h1>
          <p>Here's what's happening with your pets today.</p>
        </div>

        <span className="dashboard__date">{today}</span>
      </section>


      <section className="dashboard__stats">
        {stats.map((stat) => (
          <article className="dashboard__stat-card" key={stat.id}>
            <div className="dashboard__stat-icon">{stat.icon}</div>

            <div className="dashboard__stat-info">
              <p>{stat.title}</p>
              <h2>{stat.value}</h2>
              <span>{stat.description}</span>
            </div>
          </article>
        ))}
      </section>


      <div className="dashboard__content">
        <section className="dashboard__feeding">
          <div className="dashboard__section-header">
            <div>
              <h2>Today's Feeding</h2>
              <p>Your pets' daily meal schedule</p>
            </div>
          </div>

          <div className="dashboard__feeding-list">
            {feedings.map((feeding) => (
              <article className="dashboard__feeding-item" key={feeding.id}>
                <div className="dashboard__feeding-time">{feeding.time}</div>

                <div className="dashboard__feeding-info">
                  <h3>{feeding.meal}</h3>
                  <p>{feeding.petName}</p>
                </div>

                <span
                  className={`dashboard__status ${
                    feeding.status === "Completed"
                      ? "dashboard__status--completed"
                      : "dashboard__status--upcoming"
                  }`}
                >
                  {feeding.status}
                </span>
              </article>
            ))}
          </div>
        </section>


        <section className="dashboard__events">
          <div className="dashboard__section-header">
            <div>
              <h2>Upcoming Events</h2>
              <p>Important dates to remember</p>
            </div>
          </div>

          <div className="dashboard__events-list">
            {events.map((event) => (
              <article className="dashboard__event-item" key={event.id}>
                <div className="dashboard__event-date">{event.date}</div>

                <div className="dashboard__event-info">
                  <h3>{event.title}</h3>
                  <p>{event.petName}</p>
                  <span>{event.type}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className="dashboard__pets">
        <div className="dashboard__section-header">
          <div>
            <h2>My Pets</h2>
            <p>Meet your lovely companions</p>
          </div>
        </div>

        <div className="dashboard__pets-list">
          {pets.map((pet) => (
            <article className="dashboard__pet-card" key={pet.id}>
              <div className="dashboard__pet-avatar">{pet.emoji}</div>

              <div className="dashboard__pet-info">
                <h3>{pet.name}</h3>
                <p>
                  {pet.breed} · {pet.species}
                </p>
                <span>{pet.age}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
