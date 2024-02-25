document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('doctor-container');
  if (!container) {
      console.error('Doctor container not found!');
      return;
  }

  function highlightElements(name, specialty) {
    name.style.backgroundColor = 'lightgreen';
    name.style.color = 'white'; 
    specialty.style.backgroundColor = 'lightgreen';
    specialty.style.color = 'white'; 
  }

  function unhighlightElements(name, specialty) {
    name.style.backgroundColor = ''; 
    name.style.color = ''; 
    specialty.style.backgroundColor = ''; 
    specialty.style.color = ''; 
  }

  function loadDoctors(doctorsArray) {
    doctorsArray.forEach(doctor => {
      const card = document.createElement('div');
      card.className = 'doctor-card';
      
      const img = document.createElement('img');
      img.src = doctor.image;
      img.alt = "Doctor Image";
      img.className = 'doctor-image';
      
      const name = document.createElement('div');
      name.className = 'doctor-name';
      name.innerText = doctor.name;
      
      const specialty = document.createElement('div');
      specialty.className = 'doctor-speciality';
      specialty.innerText = doctor.specialty;

      
      img.addEventListener('mouseenter', function() {
        highlightElements(name, specialty);
      });

      img.addEventListener('mouseleave', function() {
        unhighlightElements(name, specialty);
      });

     
      name.addEventListener('mouseenter', function() {
        highlightElements(name, specialty);
      });

      name.addEventListener('mouseleave', function() {
        unhighlightElements(name, specialty);
      });

      specialty.addEventListener('mouseenter', function() {
        highlightElements(name, specialty);
      });

      specialty.addEventListener('mouseleave', function() {
        unhighlightElements(name, specialty);
      });
      
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(specialty);

      container.appendChild(card);
    });
  }

  const doctorsJson = [
    { "image": "https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=1024x1024&w=is&k=20&c=oG8pnqhJqXoFGPfrhp4sEucR0XTM1SbhzAW2ysuXjtI=", "name": "Dr. John", "specialty": "Cardiologist" },
    { "image": "https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=1024x1024&w=is&k=20&c=oG8pnqhJqXoFGPfrhp4sEucR0XTM1SbhzAW2ysuXjtI=", "name": "Dr. John", "specialty": "Cardiologist" },
    { "image": "https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=1024x1024&w=is&k=20&c=oG8pnqhJqXoFGPfrhp4sEucR0XTM1SbhzAW2ysuXjtI=", "name": "Dr. John", "specialty": "Cardiologist" },
    { "image": "https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=1024x1024&w=is&k=20&c=oG8pnqhJqXoFGPfrhp4sEucR0XTM1SbhzAW2ysuXjtI=", "name": "Dr. John", "specialty": "Cardiologist" },
    { "image": "https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=1024x1024&w=is&k=20&c=oG8pnqhJqXoFGPfrhp4sEucR0XTM1SbhzAW2ysuXjtI=", "name": "Dr. John", "specialty": "Cardiologist" },
    { "image": "https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=1024x1024&w=is&k=20&c=oG8pnqhJqXoFGPfrhp4sEucR0XTM1SbhzAW2ysuXjtI=", "name": "Dr. John", "specialty": "Cardiologist" },
    { "image": "https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=1024x1024&w=is&k=20&c=oG8pnqhJqXoFGPfrhp4sEucR0XTM1SbhzAW2ysuXjtI=", "name": "Dr. John", "specialty": "Cardiologist" },
    { "image": "https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=1024x1024&w=is&k=20&c=oG8pnqhJqXoFGPfrhp4sEucR0XTM1SbhzAW2ysuXjtI=", "name": "Dr. John", "specialty": "Cardiologist" },
    { "image": "https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=1024x1024&w=is&k=20&c=oG8pnqhJqXoFGPfrhp4sEucR0XTM1SbhzAW2ysuXjtI=", "name": "Dr. John", "specialty": "Cardiologist" },
    { "image": "https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=1024x1024&w=is&k=20&c=oG8pnqhJqXoFGPfrhp4sEucR0XTM1SbhzAW2ysuXjtI=", "name": "Dr. John", "specialty": "Cardiologist" },
    { "image": "https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=1024x1024&w=is&k=20&c=oG8pnqhJqXoFGPfrhp4sEucR0XTM1SbhzAW2ysuXjtI=", "name": "Dr. John", "specialty": "Cardiologist" },
    { "image": "https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=1024x1024&w=is&k=20&c=oG8pnqhJqXoFGPfrhp4sEucR0XTM1SbhzAW2ysuXjtI=", "name": "Dr. John", "specialty": "Cardiologist" },
    { "image": "https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=1024x1024&w=is&k=20&c=oG8pnqhJqXoFGPfrhp4sEucR0XTM1SbhzAW2ysuXjtI=", "name": "Dr. John", "specialty": "Cardiologist" },
    { "image": "https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=1024x1024&w=is&k=20&c=oG8pnqhJqXoFGPfrhp4sEucR0XTM1SbhzAW2ysuXjtI=", "name": "Dr. John", "specialty": "Cardiologist" },
    { "image": "https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=1024x1024&w=is&k=20&c=oG8pnqhJqXoFGPfrhp4sEucR0XTM1SbhzAW2ysuXjtI=", "name": "Dr. John", "specialty": "Cardiologist" },
    { "image": "https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=1024x1024&w=is&k=20&c=oG8pnqhJqXoFGPfrhp4sEucR0XTM1SbhzAW2ysuXjtI=", "name": "Dr. John", "specialty": "Cardiologist" },
    { "image": "https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=1024x1024&w=is&k=20&c=oG8pnqhJqXoFGPfrhp4sEucR0XTM1SbhzAW2ysuXjtI=", "name": "Dr. John", "specialty": "Cardiologist" },
    { "image": "https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=1024x1024&w=is&k=20&c=oG8pnqhJqXoFGPfrhp4sEucR0XTM1SbhzAW2ysuXjtI=", "name": "Dr. John", "specialty": "Cardiologist" },
    { "image": "https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=1024x1024&w=is&k=20&c=oG8pnqhJqXoFGPfrhp4sEucR0XTM1SbhzAW2ysuXjtI=", "name": "Dr. John", "specialty": "Cardiologist" },
    { "image": "https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=1024x1024&w=is&k=20&c=oG8pnqhJqXoFGPfrhp4sEucR0XTM1SbhzAW2ysuXjtI=", "name": "Dr. John", "specialty": "Cardiologist" },
    { "image": "https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=1024x1024&w=is&k=20&c=oG8pnqhJqXoFGPfrhp4sEucR0XTM1SbhzAW2ysuXjtI=", "name": "Dr. John", "specialty": "Cardiologist" },
    { "image": "https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=1024x1024&w=is&k=20&c=oG8pnqhJqXoFGPfrhp4sEucR0XTM1SbhzAW2ysuXjtI=", "name": "Dr. John", "specialty": "Cardiologist" },
    { "image": "https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=1024x1024&w=is&k=20&c=oG8pnqhJqXoFGPfrhp4sEucR0XTM1SbhzAW2ysuXjtI=", "name": "Dr. John", "specialty": "Cardiologist" },
    { "image": "https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=1024x1024&w=is&k=20&c=oG8pnqhJqXoFGPfrhp4sEucR0XTM1SbhzAW2ysuXjtI=", "name": "Dr. John", "specialty": "Cardiologist" },
    { "image": "https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=1024x1024&w=is&k=20&c=oG8pnqhJqXoFGPfrhp4sEucR0XTM1SbhzAW2ysuXjtI=", "name": "Dr. John", "specialty": "Cardiologist" },
  ];

  loadDoctors(doctorsJson);
});
