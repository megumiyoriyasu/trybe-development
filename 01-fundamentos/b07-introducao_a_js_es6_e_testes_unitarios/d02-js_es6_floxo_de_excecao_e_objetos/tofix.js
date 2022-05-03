// Part I
const makeObject = (object, key, value) => {
  object = {};
  object[key] = value;
	console.log(object);
}
makeObject('user', 'nickname', 'naido');

// Part II
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const studentSkills = (student) => {
  const skills = Object.keys(student);
  for (const x in skills) {
    console.log(`${skills[x]}, Nível: ${student[skills[x]]}`);
  }
};
studentSkills(student1);
studentSkills(student2);
