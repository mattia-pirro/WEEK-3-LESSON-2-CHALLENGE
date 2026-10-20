/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/

/* SCRIVI QUI LE TUE FUNZIONI:
   1. Modifica aggiungiTask per accettare priorita
   2. Aggiungi bottone Elimina su ogni task
   6. evidenzia(indice) / togliEvidenza(indice)
   7. data automatica nel task
   8. contaPerPriorita()
*/

const lista = document.querySelector('#lista-task');
const contatore = document.querySelector('#contatore');
const newTask = document.querySelector('#nuovo-task');

const myTask = [
  {
    titoloTask: 'Pagare le bollette',
    priorita: 'alta',
    data: new Date(),
  },
  {
    titoloTask: 'Studiare JavaScript',
    priorita: 'media',
    data: new Date(),
  },
  {
    titoloTask: 'Comprare il pane',
    priorita: 'bassa',
    data: new Date(),
  },
  {
    titoloTask: 'Chiamare il dentista',
    priorita: 'alta',
    data: new Date(),
  },
  {
    titoloTask: 'Riposarsi',
    priorita: 'bassa',
    data: new Date(),
  },
];

function taskArray() {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  myTask.forEach((task) => {
    const newLi = document.createElement('li');
    newLi.classList.add(`priorita-${task.priorita}`, 'evidenziato');

    const textSpan = document.createElement('span');
    textSpan.textContent = task.titoloTask;
    newLi.appendChild(textSpan);

    const badge = document.createElement('span');
    badge.classList.add('badge');
    badge.textContent = task.priorita;
    newLi.appendChild(badge);

    const taskDate = document.createElement('span');
    taskDate.classList.add('data', 'divData');
    taskDate.textContent = task.data.toLocaleString('it-IT');

    const elimina = document.createElement('button');
    elimina.textContent = 'Elimina';
    taskDate.appendChild(elimina);
    newLi.appendChild(taskDate);

    lista.appendChild(newLi);
  });
}

taskArray();

contatore.textContent = myTask.length;

function aggiungiTask() {
  const testoTask = newTask.value.trim();
  const priority = ['alta', 'media', 'bassa'];

  if (testoTask === '') {
    return;
  }

  const random = (Math.floor(Math.random() * priority.length));

  myTask.push({
    titoloTask: testoTask,
    priorita: `${priority[random]}`,
    data: new Date(),
  });

  contatore.textContent = myTask.length;

  newTask.value = '';

  taskArray();
}