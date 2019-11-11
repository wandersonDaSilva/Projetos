import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  items = [{ title: 'Slide 1' }, { title: 'Slide 2' }, { title: 'Slide 3' },{ title: 'Slide 4' }];

  index;

  isShown:boolean=true;

  images = [ 
    'https://us.123rf.com/450wm/olgysha/olgysha1206/olgysha120600002/13966486-panorama-of-cologne-germany.jpg?ver=6',
    'https://media-cdn.tripadvisor.com/media/photo-s/09/23/31/f3/new-clubhouse-and-second.jpg',
  ];

  onChange(idx) {
    this.index =  idx;
  }
  // event_list = [
  //   {
  //     event: ' Event 1',
  //     eventLocation: 'Bangalore',
  //     eventDescription: 'In bangalore, first event is going to happen. Please be careful about it',
  //     img: "https://media-cdn.tripadvisor.com/media/photo-s/09/23/31/f3/new-clubhouse-and-second.jpg",
  //     eventStartDate: new Date('2019/05/20'),
  //     eventEndingDate: new Date('2019/05/24')
  //   },
  //   {
  //     event: ' Event 2',
  //     eventLocation: 'Dubai',
  //     eventDescription: 'Dubai is another place to host so,e, first event is going to happen. Please be careful about it',
  //     img: 'https://media-cdn.tripadvisor.com/media/photo-s/17/17/d6/26/lindissimo-final-de-tarde.jpg',
  //     eventStartDate: new Date('2019/07/28'),
  //     eventEndingDate: new Date('2019/07/30')
  //   },
  //   {
  //     event: ' Event 3',
  //     eventLocation: 'Dubai',
  //     eventDescription: 'Dubai is another place to host so,e, first event is going to happen. Please be careful about it',
  //     img: 'https://i.pinimg.com/474x/b4/3e/a1/b43ea13212de7b4afb058298e36aacee--fiji-beach-fiji-islands.jpg',
  //     eventStartDate: new Date('2019/07/28'),
  //     eventEndingDate: new Date('2019/07/30')
  //   },
  //    {
  //     event:' Event 4',
  //     eventLocation:'Singapore',
  //     eventDescription:'Singapore is another great hosting city',
  //     img: 'https://us.123rf.com/450wm/olgysha/olgysha1206/olgysha120600002/13966486-panorama-of-cologne-germany.jpg?ver=6',
  //     eventStartDate: new Date('2018/05/20'),
  //     eventEndingDate: new Date('2018/05/24')
  //   },
  // ]
  // upcoming_events = this.event_list.filter(event => event.eventStartDate > new Date());
  // past_events = this.event_list.filter(event => event.eventEndingDate < new Date());
  // current_events = this.event_list.filter(event => (event.eventStartDate >= new Date() && (event.eventEndingDate <= new Date())))
  constructor() {
  }

  ngOnInit() {

  }


}
