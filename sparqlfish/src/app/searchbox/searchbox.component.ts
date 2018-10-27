import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { pos } from 'pos';
import { Lexer } from 'pos';
import { Tagger } from 'pos';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})

export class SearchboxComponent implements OnInit {
  searchtext: String;
  values: String[] = [];
  entities: String[] = [];
  concepts: String[] = [];
  properties: String[] = [];

  constructor() { }

  ngOnInit() {
  }

  evaluate(e: any) {
    if (e.keyCode === 13) {
      this.values = [];
      this.entities = [];
      this.concepts = [];
      this.properties = [];
      const words = new Lexer().lex(this.searchtext);
      const tagger = new Tagger();
      const taggedWords = tagger.tag(words);

      for (const taggedWord of taggedWords) {
        const word = taggedWord[0];
        const tag = taggedWord[1];
        console.log('word: ' + word + ' : ' + tag);
        if (tag.match(/^NNP[S]?/gi)) {
          this.entities.push(word);
          console.log('entities: ' + word);
        } else if (tag.match(/^NN[S]?/gi)) {
          this.concepts.push(word);
          console.log('concepts: ' + word);
        } else if (tag.match(/^VB/gi)) {
          this.properties.push(word);
          console.log('properties: ' + word);
        }
      }
      this.values.push('potential entities: ' + this.entities);
      this.values.push('potential concepts: ' + this.concepts);
      this.values.push('potential properties: ' + this.properties);
    }
  }
}
