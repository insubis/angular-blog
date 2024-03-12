import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'
  contentTitle:string = ''
  contentDescription:string = ''
  private id:String | null = '0'

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )

    this.setValuesToComponets(this.id as string)
  }

  setValuesToComponets(id:string|null){
    const result = dataFake.filter(article => article.id.toString() == id)[0]
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }



}
