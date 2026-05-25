class SlotMachine {
  private coins: number;

  constructor() {
    this.coins = 0;
  }

  // Boolean aleatorio para cada ruleta
  private randomBool(): boolean {
    return Math.random() >= 0.5;
  }

  // Jugar: suma moneda, tira 3 ruletas, comprueba premio
  public play(): void {
    this.coins = this.coins + 1;

    const r1 = this.randomBool();
    const r2 = this.randomBool();
    const r3 = this.randomBool();

    const hasWon = r1 && r2 && r3;

    if (hasWon) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0; // reiniciar monedas tras ganar
    } else {
      console.log("Good luck next time!!");
    }
  }
}

// Ejemplo de uso
const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
