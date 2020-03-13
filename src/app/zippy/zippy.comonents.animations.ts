import { trigger, state, style, transition, animate } from '@angular/animations';

export let expandCollapse = trigger('expandCollapse', [
    //overflow hides/shows children of element
    state('collapsed', style({ height: 0, overflow: 'hidden', paddingTop: 0, paddingBottom: 0 })),
    //second state is not needed angular does this automatically
    state('expanded', style({ height: '*', overflow: 'auto', padding: '*' })),
    transition('collapsed => expanded', [
      animate('300ms ease-out')
    ]),
    transition('expanded => collapsed', [
      animate('300ms ease-in')
    ])
  ])