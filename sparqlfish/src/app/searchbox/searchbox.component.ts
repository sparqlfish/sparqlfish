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
  value;

  constructor() { }

  ngOnInit() {
  }

  evaluate(e: any) {
    if (e.keyCode === 13) {
      const words = new Lexer().lex(this.searchtext);
      const tagger = new Tagger();
      const taggedWords = tagger.tag(words);
      this.value = taggedWords;

      // for (const i of taggedWords) {
      //     const taggedWord = taggedWords[i];
      //     const word = taggedWord[0];
      //     const tag = taggedWord[1];
      //     this.value = this.value + '\
      //     ' + word + ' /' + tag;
    }
  }
}
