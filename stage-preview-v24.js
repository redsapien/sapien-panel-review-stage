(()=>{
 // Select isolated device-specific manifest; production manifests are never loaded.
 const mobileDevice=Boolean(navigator.userAgentData?.mobile || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || (/Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints>1));
 const stageManifest=document.querySelector('link[rel="manifest"]');if(stageManifest)stageManifest.href=mobileDevice?'./manifest-mobile.webmanifest':'./manifest-desktop.webmanifest';

 // Nine short five-word prompts. Business names remain in this browser tab only; no server or account write.
 const hero=document.getElementById('welcome-business-title');
 const businessInputs=[document.getElementById('settings-business'),document.getElementById('business-name')].filter(Boolean);
 const prompts=[name=>`¿Qué hacemos hoy por ${name}?`,name=>`¿Qué creamos hoy con ${name}?`,name=>`¿Qué impulsamos hoy en ${name}?`,name=>`¿Qué mejoramos hoy para ${name}?`,name=>`¿Qué construimos hoy con ${name}?`,name=>`¿Qué ideas damos a ${name}?`,name=>`¿Qué soluciones hacemos para ${name}?`,name=>`¿Qué oportunidad abrimos a ${name}?`,name=>`¿Cómo avanzamos hoy con ${name}?`];
 let promptIndex=0,brand='su negocio';
 const cleanName=value=>String(value||'').replace(/[\u0000-\u001f<>]/g,'').replace(/\s+/g,' ').trim().slice(0,22)||'su negocio';
 try{brand=cleanName(sessionStorage.getItem('sapien-stage-business-name')||'su negocio');}catch{}
 for(const input of businessInputs){input.value=brand==='su negocio'?'':brand;input.addEventListener('input',()=>{brand=cleanName(input.value);for(const other of businessInputs)if(other!==input&&document.activeElement!==other)other.value=brand==='su negocio'?'':brand;try{sessionStorage.setItem('sapien-stage-business-name',brand==='su negocio'?'':brand)}catch{};renderPrompt()})}
 function renderPrompt(){if(hero)hero.textContent=prompts[promptIndex](brand)}
 renderPrompt();
 if(hero&&!matchMedia('(prefers-reduced-motion: reduce)').matches){window.setInterval(()=>{promptIndex=(promptIndex+1)%prompts.length;renderPrompt()},7000)}

 const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
 const announce=t=>{let n=document.querySelector('.stage-demo-note');if(!n){n=document.createElement('div');n.className='stage-demo-note';n.setAttribute('role','status');n.setAttribute('aria-live','polite');document.body.append(n)}n.textContent=t;n.hidden=false;clearTimeout(window.__stageNoteTimer);window.__stageNoteTimer=setTimeout(()=>n.hidden=true,3000)};
 function setView(name){const views=[...document.querySelectorAll('.view')];if(!views.some(v=>v.id==='view-'+name))return;views.forEach(v=>v.classList.toggle('active',v.id==='view-'+name));document.querySelectorAll('[data-view]').forEach(a=>{const on=a.dataset.view===name;a.classList.toggle('active',on);if(on)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});window.scrollTo({top:0,behavior:reduced()?'auto':'smooth'});document.documentElement.classList.remove('mobile-rail-open');document.body.classList.remove('mobile-rail-open');document.querySelector('#rail-toggle')?.setAttribute('aria-expanded','false');}
 const modal=document.getElementById('web-service-modal');
 function openDetails(){if(!modal)return;modal.hidden=false;modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');const close=modal.querySelector('.web-service-modal-close');close?.focus({preventScroll:true});}
 function closeDetails(){if(!modal)return;modal.hidden=true;modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');document.querySelector('.web-service-more')?.focus({preventScroll:true});}
 const account=document.getElementById('settings-menu');
 function openAccount(pane='profile'){if(!account)return;account.hidden=false;account.setAttribute('aria-hidden','false');account.dataset.accountPane=pane;document.querySelector('#settings-gear-top')?.setAttribute('aria-expanded','true');document.querySelectorAll('#settings-menu .account-v27-pane').forEach(x=>{x.hidden=x.id!==`account-pane-${pane}`});document.body.classList.add('account-menu-open');}
 function closeAccount(){if(!account)return;account.hidden=true;account.setAttribute('aria-hidden','true');document.body.classList.remove('account-menu-open');document.querySelector('#settings-gear-top')?.setAttribute('aria-expanded','false');document.querySelector('#settings-gear-top,#rail-settings-button,#mobile-open-profile')?.focus({preventScroll:true});}
 const requestModal=document.getElementById('request-modal');
 function openRequestPreview(){if(!requestModal)return;closeDetails();requestModal.hidden=false;requestModal.classList.add('open');requestModal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');document.body.style.overflow='hidden';const product=document.getElementById('request-product');if(product)product.textContent='Su web + IA · Vista de prueba';document.getElementById('request-status')?.replaceChildren();document.getElementById('request-title')?.focus({preventScroll:true});}
 function closeRequestPreview(){if(!requestModal)return;requestModal.classList.remove('open');requestModal.hidden=true;requestModal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');document.body.style.overflow='';document.querySelector('.web-service-more')?.focus({preventScroll:true});}

 document.addEventListener('click',async e=>{
  const ext=e.target.closest('a[href^="http"],a[href^="mailto:"]');if(ext){e.preventDefault();e.stopImmediatePropagation();announce('Enlaces externos desactivados en esta vista de prueba.');return}
  const nav=e.target.closest('[data-view]');if(nav){e.preventDefault();setView(nav.dataset.view);return;}
  const ctl=e.target.closest('[data-scroll-direction][data-track-target]');if(ctl){const el=document.getElementById(ctl.dataset.trackTarget);if(el)el.scrollBy({left:Number(ctl.dataset.scrollDirection)*Math.max(260,el.clientWidth*.8),behavior:reduced()?'auto':'smooth'});return;}
  const info=e.target.closest('[data-info-next],[data-info-prev]');if(info){const id=info.dataset.infoNext||info.dataset.infoPrev,el=document.getElementById(id);if(el)el.scrollBy({left:(info.hasAttribute('data-info-next')?1:-1)*Math.max(240,el.clientWidth*.8),behavior:reduced()?'auto':'smooth'});return;}
  const b=e.target.closest('button');if(!b)return;
  if(b.matches('.web-service-modal-close')){e.preventDefault();closeDetails();return;}
  if(b.matches('.web-modal-order')){e.preventDefault();openRequestPreview();return;}
  if(b.matches('#request-close,#request-cancel')){e.preventDefault();closeRequestPreview();return;}
  if(b.matches('#request-send')){e.preventDefault();closeRequestPreview();announce('Vista de prueba: no se envió ni guardó ninguna solicitud.');return;}

  if(b.matches('.ecosystem-action.web-service-more')){e.preventDefault();openDetails();return;}
  if(b.matches('#settings-gear-top,#rail-settings-button,#mobile-open-profile,#mobile-open-settings,[data-open-account-pane]')){e.preventDefault();const target=b.dataset.openAccountPane||(b.matches('#mobile-open-settings')?'preferences':'profile');openAccount(target);return;}
  if(b.matches('#settings-close')){e.preventDefault();closeAccount();return;}
  if(b.matches('#settings-open-profile')){e.preventDefault();openAccount('profile');return;}
  if(b.matches('#settings-open-preferences')){e.preventDefault();openAccount('preferences');return;}
  if(b.matches('#settings-open-agents')){e.preventDefault();openAccount('profile');announce('Vista de prueba: la cuenta y sus conexiones no están activas.');return;}
  if(b.matches('#settings-open-terms,#desktop-account-legal')){e.preventDefault();openAccount('terms');return;}
  if(b.matches('#account-mobile-back')){e.preventDefault();openAccount('profile');return;}
  if(b.matches('#theme-toggle')){const root=document.documentElement;root.dataset.theme=root.dataset.theme==='light'?'dark':'light';b.setAttribute('aria-pressed',root.dataset.theme==='light'?'true':'false');return;}
  if(b.matches('#install-app-desktop,#install-app-mobile')){e.preventDefault();if(window.__stageInstallPrompt){const prompt=window.__stageInstallPrompt;window.__stageInstallPrompt=null;await prompt.prompt();const result=await prompt.userChoice;announce(result?.outcome==='accepted'?'Sapien se añadió a este dispositivo.':'Instalación cancelada.');}else announce('Para instalar: abra el menú del navegador y elija “Instalar aplicación” o “Añadir a pantalla de inicio”.');return;}
  if(b.matches('.ecosystem-action,.web-modal-order,#mobile-open-profile,#mobile-open-settings,#mobile-agents-action,#settings-gear-top,#rail-settings-button,#signout-desktop,#mobile-signout,#settings-save,#brand-upload-button,#panel-notifications-toggle,#notification-welcome-enable,#share-friend,#change-password,#passkey-register,#auth-google-sign-in,#auth-submit,#request-send')){e.preventDefault();e.stopImmediatePropagation();announce('Demostración visual: esta acción está desactivada y no envía ni guarda información.');return;}
  const toggle=e.target.closest('#rail-toggle,#hamburger-tech');if(toggle){document.documentElement.classList.toggle('mobile-rail-open');document.body.classList.toggle('mobile-rail-open');const expanded=document.documentElement.classList.contains('mobile-rail-open');toggle.setAttribute('aria-expanded',expanded?'true':'false');return;}
  if(e.target.closest('#rail-drawer-close')){document.documentElement.classList.remove('mobile-rail-open');document.body.classList.remove('mobile-rail-open');document.querySelector('#rail-toggle')?.setAttribute('aria-expanded','false');return;}
 });
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&requestModal&&!requestModal.hidden){e.preventDefault();closeRequestPreview();return}if(e.key==='Escape'&&modal&&!modal.hidden)closeDetails();});
 document.addEventListener('click',e=>{if(e.target===requestModal&&!requestModal.hidden)closeRequestPreview()});

 const chatForm=document.getElementById('sapien-ai-compose'),chatInput=document.getElementById('sapien-ai-input'),chatThread=document.getElementById('sapien-ai-thread'),chatBusy=document.getElementById('sapien-ai-processing');let chatTimer=[];
 function addChatLine(text,who){const row=document.createElement('div');row.className='sapien-ai-message-row '+(who==='user'?'is-user':'');const bubble=document.createElement('div');bubble.className='sapien-ai-message '+(who==='user'?'user':'assistant');const p=document.createElement('p');p.textContent=text;bubble.append(p);if(who!=='user'){const tag=document.createElement('span');tag.className='sapien-ai-message-label';tag.textContent='Sapien · respuesta de demo';bubble.prepend(tag)}row.append(bubble);chatThread.append(row);row.scrollIntoView({block:'nearest',behavior:reduced()?'auto':'smooth'});}
 function demoReply(raw){const text=String(raw||'').trim().slice(0,400);if(!text||chatBusy.hidden===false)return;addChatLine(text,'user');chatInput.value='';chatInput.disabled=true;chatForm.querySelector('button[type=submit]').disabled=true;chatBusy.hidden=false;const status=chatBusy.querySelector('.sapien-ai-processing-copy');const steps=['Leyendo su consulta…','Ordenando los pasos que podría revisar…','Preparando una respuesta de demostración…'];let i=0;status.textContent=steps[0];const t1=setTimeout(()=>{i=1;status.textContent=steps[i]},720),t2=setTimeout(()=>{i=2;status.textContent=steps[i]},1400),t3=setTimeout(()=>{chatBusy.hidden=true;addChatLine('La conexión con el agente todavía está pendiente. En esta prueba solo mostramos el flujo visual; su consulta no fue procesada por una IA real.','assistant');chatInput.disabled=false;chatForm.querySelector('button[type=submit]').disabled=false;chatInput.focus({preventScroll:true})},2300);chatTimer=[t1,t2,t3];}
 if(chatForm){chatForm.addEventListener('submit',e=>{e.preventDefault();e.stopImmediatePropagation();demoReply(chatInput.value)});document.querySelectorAll('[data-ai-prompt]').forEach(b=>b.addEventListener('click',()=>demoReply(b.dataset.aiPrompt)));chatInput.addEventListener('input',()=>{chatInput.style.height='auto';chatInput.style.height=Math.min(chatInput.scrollHeight,112)+'px'});}
 document.addEventListener('submit',e=>{e.preventDefault();e.stopImmediatePropagation();announce('Formulario desactivado en la vista de prueba; no se envió información.');});
 document.addEventListener('change',e=>{if(e.target.matches('input[type=file]')){e.preventDefault();e.target.value='';announce('La carga de archivos está desactivada en esta vista.')}});
 window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();window.__stageInstallPrompt=e;document.querySelectorAll('#install-app-desktop,#install-app-mobile').forEach(b=>b.setAttribute('aria-label','Instalar Sapien en este dispositivo'));});
 if('serviceWorker' in navigator && location.protocol==='https:'){const sw=new URL('./sw.js',location.href);const scope=new URL('./',location.href).pathname;navigator.serviceWorker.register(sw.pathname+'?v=24',{scope}).catch(()=>{});}
})();
