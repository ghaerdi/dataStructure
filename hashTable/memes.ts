interface Meme {
  [key: string]: string;
}

class Memes {
  [key: number]: string;
  
  public add(value: Meme): void {
    const key = Object.keys(value)[0];
    const index = this.newIndex(key);
    this[index] = value[key];
  }

  public get(value: string): string {
    const index = this.newIndex(value);
    return this[index];
  }

  private newIndex(key: string): number {
    const chars: string[] = this.toChars(key);
    const code: number = this.newCode(chars);
    return code;
  }

  private newCode(chars: string[]): number {
    let code: number = 0;
    for (let index = 0; index < chars.length; index++) {
      code += this.ascii(chars[index]) * (index + 1);
    }
  
    return code;
  }

  private ascii(char: string): number {
    return char.charCodeAt(0);
  }

  private toChars(text: string): string[] {
    return text.split("");
  }
}

const memes = new Memes();

memes.add({"el pepe": "maico mmg"})
memes.add({"mague": "manie"})
console.log(memes)
