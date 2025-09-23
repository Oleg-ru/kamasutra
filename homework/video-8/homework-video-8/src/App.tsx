import './App.css'

const tasks = [
    {
        id: 1,
        title: "Купить продукты на неделю",
        isDone: false,
        addedAt: "1 сентября",
        priority: 2,
    },
    {
        id: 2,
        title: "Полить цветы",
        isDone: true,
        addedAt: "2 сентября",
        priority: 0,
    },
    {
        id: 3,
        title: "Сходить на тренировку",
        isDone: false,
        addedAt: "3 сентября",
        priority: 1,
    },
    {
        id: 4,
        title: "Срочно отправить рабочий отчет",
        isDone: false,
        addedAt: "4 сентября",
        priority: 4,
    },
    {
        id: 5,
        title: "Заплатить за коммунальные услуги",
        isDone: false,
        addedAt: "3 сентября",
        priority: 3,
    },
]

function App() {

    if (tasks === null) {
        return <h2>Загрузка...📡</h2>
    }

    if (tasks.length === 0) {
        return <h2>Еще нет задач 🎃</h2>
    }

  return (
      <div className='main-container-tasks'>
          {
              tasks.map(task => {
                  function getPriorityClass(priority: number) {
                      switch (priority) {
                          case 0: return 'low-priority';
                          case 1: return 'medium-priority';
                          case 2: return 'high-priority';
                          case 3: return 'urgent-priority';
                          case 4: return 'highest-priority';
                          default: return '';
                      }
                  }
                  const classTitle = `task-title ${task.isDone ? 'line-through' : ''}`;
                  const backgroundTask = `task-self-container ${getPriorityClass(task.priority)}`;

                  return (
                      <div key={task.id} className={backgroundTask}>
                          <span className='task-main-title'>Заголовок:</span>
                          <span className={classTitle}>{task.title}</span>
                          <br/>
                          <span className='task-status'>Статус: </span>
                          <input type="checkbox" checked={task.isDone}/>
                          <br/>
                          <span className='task-title-date'>Дата создания задачи: </span>
                          <span className='task-start-date'>{task.addedAt}</span>
                      </div>
                  )
              })
          }
      </div>
  )
}

export default App
