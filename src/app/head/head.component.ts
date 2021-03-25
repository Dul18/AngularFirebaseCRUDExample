import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  links = [
    {link:"home", txt:"Home"},
    {link:"address", txt: "Address Book"},
    {link:"about", txt:"About"}
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
