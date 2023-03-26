# Vulnerabilidades del Sistema de Navegación
## Playground

```jsx
export function simulacion({ satelite, estacion, astronauta, texto }) {
  satelite.send({
    from: astronauta,
    to: estacion,
    text: texto,
  });

  return satelite.messages;
}

export class Astronaut {
  constructor({ name }) {
    this.name = name;
  }
}

export class SpaceStation {
  constructor({ name }) {
    this.name = name;
    this.team = [];
  }

  addTeamMember(newMember) {
    if (newMember instanceof Astronaut) {
      this.team.push(newMember.name);
    }
  }
}

export class Satelite {
  constructor({
    name,
  }) {
    this.name = name;
    this.messages = [];
  }
  
  send({ from, to, text }) {
    this.messages.push({
      from: from.name,
      to: to.name,
      text,
    });
  }
}
```

## Consigna

El Capitan DC envió un mensaje por medio del Satélite Platzi Sat01 para avisarnos que el sistema de comunicación presenta vulnerabilidades.

Nuestro equipo ejecutó una función de simulación e identificó los siguientes problemas:

- El satélite no valida si quien envía el mensaje es astronauta
- El satélite no valida si quien recibe el mensaje es una estación espacial
- El satélite no valida si quien envía el mensaje es parte de la tripulación de la estación espacial que recibe el mensaje

En el sistema de recursos encontrarás las clases de Platzi donde puedes aprender las herramientas necesarias para cumplir esta misión.

Ejemplo 1:

```jsx
// Input
const satelitePlatziSat01 = new Satelite({ name: 'Platzi Sat01' });
const capitanDC = new Astronaut({ name: 'Capitán DC' });
const estacionPlatzi = new SpaceStation({ name: 'Estación Espacial Platzi' });
estacionPlatzi.addTeamMember(capitanDC);
satelitePlatziSat01.send({
  from: capitanDC,
  to: estacionPlatzi,
  text: "SOS",
});
console.log(satelitePlatziSat01.messages);

// Output
[
 {
"from": "Capitán DC",
"to": "Estación Espacial Platzi",
"text": "SOS"
 }
]
```

Ejemplo 2:

```jsx
// Input
constsatelitePlatziSat01 = new Satelite({ name: 'Platzi Sat01' });
constcomandanteJuanita = new Astronaut({ name: 'Comandante Juanita' });
constestacionPlatzi = new SpaceStation({ name: 'Estación Espacial Platzi' });
satelitePlatziSat01.send({
  from: comandanteJuanita,
  to: estacionPlatzi,
  text: "Todo en orden",
});
console.log(satelitePlatziSat01.messages);

// Output
[]
```

Ejemplo 3:

```jsx
// Input
constsatelitePlatziSat01 = new Satelite({ name: 'Platzi Sat01' });
constcapitanImpostor = { name: 'Capitan Impostor' };
constestacionPlatzi = new SpaceStation({ name: 'Estación Espacial Platzi' });
satelitePlatziSat01.send({
  from: capitanImpostor,
  to: estacionPlatzi,
  text: "MUAJAJA",
});
console.log(satelitePlatziSat01.messages);

// Output
[]
```

Ejemplo 4:

```jsx
// Input
const satelitePlatziSat01 = new Satelite({ name: 'Platzi Sat01' });
const capitanImpostor = { name: 'Capitan Impostor' };
const estacionFalsa = { name: 'Estacion Espacial Falsa', team: ["Capitan Impostor"] };
satelitePlatziSat01.send({
  from: capitanImpostor,
  to: estacionFalsa,
  text: "MUAJAJA2",
});
console.log(satelitePlatziSat01.messages);

// Output
[]
```