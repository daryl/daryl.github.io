
import 'babel-polyfill';
import 'whatwg-fetch';

/**
 *
 *
 *   /\___/\
 *  ( o   o )  3..2..1
 *  (  =^=  )
 *  (        )
 *  (         )
 *  (          )))))))))))
 *
 *
 */

window.onload = () => {
  const patt = /contact(\.html)?$/;
  const path = location.pathname;

  if(!patt.test(path)) return;

  const form = λ('form');
  const butt = λ('button', form);
  const node = λ('input', form);

  // Placeholders
  const holders = [
    'Okay. Next, your email?',
    'And your message...',
  ];

  // Values
  let yay = false;
  let stage = 1;
  let email;
  let name;
  let msg;

  // Event listeners
  node.addEventListener('keypress', enter);
  butt.addEventListener('click', send);

  /**
   * Digest keypress
   *
   * If it's enter, detect whether
   * you can enter the next stage.
   *
   * @api private
   */

  function enter(e) {
    if(13 != e.keyCode) return true;
    if(null === stage) return false;

    const val = node.value;

    e.preventDefault();

    switch(stage) {
    case 1:
      if('' == val) return;
      name = val;
      break;
    case 2:
      if(!/\S+@\S+\.\S+/.test(val)) return;
      butt.removeAttribute('disabled');
      email = val;
      yay = true;
      break;
    case 3:
      if('' == val) return;
      stage = null;
      msg = val;
      send();
      return;
    }

    node.placeholder = holders[stage-1];
    node.value = '';

    stage++;
  }

  /**
   * Send email
   *
   * Sends a POST request to Formspree.
   * Who needs servers anyway.
   */

  async function send(e) {
    if(e) e.preventDefault();

    if(!yay) return false;

    let obj = {name, email, msg};

    let res = await fetch('/hey', {
      body: JSON.stringify(obj),
      method: 'POST',
    });

    console.log(res);
  }

};

/**
 * Simple Node λ
 *
 * @param String sel
 * @param Boolean all
 * @return Mixed
 */

function λ() {
  let args = arguments;
  let ctx = document;
  let val = args[0];
  let all = false;
  let fn;

  switch(args.length) {
  case 2:
    'number' == typeof args[1]
      ? all = args[1]
      : ctx = args[1];
    break;
  case 3:
    ctx = args[1];
    all = args[2];
    break;
  }

  if(!ctx) return;

  if(all) {
    fn = 'querySelectorAll';
  } else {
    fn = 'querySelector';
  }

  return ctx[fn](val);
}

