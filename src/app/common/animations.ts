import { trigger, state, style, transition, animate, keyframes, animation, useAnimation } from '@angular/animations';
//css animations: https://daneden.github.io/animate.css/

export let bounceOutLeftAnimation = animation(
    //animate(duration delay easing)
    /*
    ease-in -> start slow, end fast
    ease-out -> start fast, end slow
    ease-in-out -> start slow durates fast, ends slow
    cubic-bezier() -> is a custom curve -> https://cubic-bezier.com
    */

    animate('0.5s 0.5s cubic-bezier(.61, .29, .07, 1.02)', keyframes([
        style({ 
            offset: .2,
            opacity: 1,
            transform: 'translateX(20px)'
        }),
        style({ 
            offset: 1,
            opacity: 0,
            transform: 'translateX(-100%)'
        })
    ]))
  )



export let slideInLeft = trigger('slideInLeft', [
    transition(':enter', [
        style({ transform: 'translateX(-10px)' }),
        animate(500)
    ]),
    transition(':leave', useAnimation(bounceOutLeftAnimation))
])

/*export let fade = trigger('fade', [
    //this replaces the style for opacity in the transitions with void
    state('void', style({ opacity: 0 })),

    /*
    //void state to default state (from a yellow color to white)
    transition('void => *', [
      style({ backgroundColor: 'yellow' }),
      animate(2000)
    ]),

    //default state to void state (when element is deleted its going from default to void)
    transition('* => void', [
      animate(2000, style({ opacity: 0 }))
    ])
    
    transition(':enter, :leave', [ //= void <=> *
      animate(2000)
    ])
  ])*/

  export let fadeInAnimation = animation([
    style({ opacity: 0 }),
    animate('{{ duration }} {{ easing }}')
  ], 
  {
      //default values form the set values
      params: {
          duration: '2s',
          easing: 'ease-out'
      }
  })

  export let fade = trigger('fade', [
      transition(':enter', useAnimation(fadeInAnimation)),

      transition(':leave', [
          animate(2000, style({ opacity: 0 }))
      ])
  ])