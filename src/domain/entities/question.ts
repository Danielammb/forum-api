import { randomUUID } from "crypto";

export class Question {
  public title: string;
  public id: string;
  public content: string;

  constructor(title: string, content: string, id?: string) {
    this.title = title;
    this.content = content;
    this.id = id ?? randomUUID();
  }
}
