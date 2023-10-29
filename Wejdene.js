///
/// EXERCICE (WEJDENE)
///créer une catégorie de personne
/// creer les objets



class Hater {
  constructor(name,hp) {
    this.name = name;
    this.hp = hp;
   
  }
}
{
  const musiques = ['Americain Idiots de Green Day' ,'I Wanna See Some Ass de Jack Harlow',
  'Anissa de Wejdene','Parents de YUNGBLUD','I Got B!tches de A2M'];

}

  const trajet = {
    radio: musiques[Math.floor(Math.random() * musiques.length)],
    feuxRouges: 30;
    changementsTaxi: 0;
  }

  function afficherInfoTrajet() {
    console.log(`Musique: '{trajet.radio}', Feux restants: '{trajet.feuxRouges}`);
  }

  let  = new Hater("John", 10); 

  function simulerTrajet() {
    while (trajet.feuxRouges > 0) {
      afficherInfoTrajet();
      if (trajet.radio === "Anissa - Wejdene") {
        personnage.hp -= 1;
        trajet.changementsTaxi += 1;
        console.log(`Changement de taxi '{trajet.changementsTaxi}`);
      }
      trajet.feuxRouges -= 1;
      trajet.radio = musiques[Math.floor(Math.random() * musiques.length)];
      if (personnage.santeMentale <= 0) {
        console.log("Explosion");
        return;
      }
    }
  
  }



 

 



 