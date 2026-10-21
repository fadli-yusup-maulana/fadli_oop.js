class Hewan {
    bersuara(){
        console.log("suara hewan");
    }
}
class Kucing extends Hewan {
    mengeong(){
        console.log("Meong....");
    }
}

const kucing = new Kucing();
kucing.bersuara();
kucing.mengeong();
