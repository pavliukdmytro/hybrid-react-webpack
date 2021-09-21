const rootComponents = {
    Header: () => require('./components/Header/Header').default,
    Footer: () => import(/* webpackChunkName: "Footer" */ './components/Footer/Footer'),
};

export default rootComponents;