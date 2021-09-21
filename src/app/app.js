import ReactDOM from 'react-dom';

const rootComponents = require('./root-components').default;

const roots = document.querySelectorAll('[data-react]');

async function createComponent(el) {
    const Component = (await rootComponents[el.dataset.react]()).default;
    const prop = el?.dataset?.result;

    if (!prop) {
        ReactDOM.render(<Component />, el);
    } else {
        ReactDOM.render(<Component result={prop && JSON.parse(prop)} />, el);
    }
}

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const { target } = entry;
      observer.unobserve(target);
        console.log(target);
      createComponent(target);
    }
  });
}, options);

roots.forEach((el) => {
    // createComponent(el);
    observer.observe(el);
});