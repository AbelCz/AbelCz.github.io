(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1725:function(e,a,t){"use strict";a.a={sidebar:"_83wtTb1BCQnnURdArrZur",sidebarNavTag:"_3q0FKiXw3tjV2YI3hN3w0p",sidebarButtons:"_4QkIGZ83i8IRb6mEdRXxw",contentWrapper:"_1_zVpFrTUP8ipTyVqpV74I",contentContainer:"_28ZvETZ3W2889Sii32q9ed",header:"_1S_VGzfL5ijS1K4fGDn1Ze",sidebarCollapsed:"_1ZTn2wNaIJI8YfjIEgquMp",sidebarOpen:"_2nnc_V4v3xTCQNn6Xxu3i9",tableContainer:"_2ku-2mH_FOhvs_3lRD_Dg3",noBorder:"v5b_JPuyMFQ369WcQ6kmn",tableContent:"_3SgRNJawta6UBIo_1unPUm",extendCardTableEdges:"_2k79IgNS9vV9bmtzjKc_Ga",sectionContainer:"_2JDpwuXCEVehe9kPfKj0zi",topSectionContainer:"_3RlVc37iGg61hd0nOeYIVO",cellWithIcon:"lvuyW1ZmUL_6dJUl2v1si",cardStyles:"I-57U7h3NEE2ggF5ohvSw",cellText:"_253LZak9ginUO60Mmh2ner",stacked:"_3lyRn1-WcVHGcQJKtYIMVf",time:"_1Aezso1l2Csa5iW9hTFt4V",percentChange:"ViZPqsEZa8PxfF1FvaJgA",linkOut:"Xoa7flB_S-AL-Y7mGgPIm",regularFont:"_3uUJfQ1loZVpQ8m-O0E5fZ",green:"_2IcFB3aw3_oJ8teMu_GM2p",red:"_2yLjAE6yCrbIHQrDPl7x2O"}},1764:function(e,a,t){"use strict";t.d(a,"c",(function(){return p})),t.d(a,"a",(function(){return I})),t.d(a,"b",(function(){return x}));var n=t(0),l=t.n(n),r=t(1),i=t.n(r),o=t(14),c=t(8),s=t(15),d=t(120),b=t(362),m=t(17);const WithSidebar=({children:e,sidebar:a})=>{const t=Object(o.e)(),n=Object(o.f)(b.b);return l.a.createElement(u.MasterDetail,{isSidebarOpen:n},l.a.createElement(u.Master,{isSidebarOpen:n},a),l.a.createElement(u.MasterCollapsedDrawer,{isSidebarOpen:n,role:"button",tabIndex:0,onClick:()=>t(Object(d.c)(!0))},l.a.createElement(s.nb,null)),l.a.createElement(u.Detail,null,e))};WithSidebar.propTypes={children:i.a.node,sidebar:i.a.node};var p=WithSidebar;const u={};u.MasterDetail=c.c.div`
  --current-sidebar-width: ${({isSidebarOpen:e})=>e?"var(--sidebar-width)":"var(--collapsed-sidebar-width)"};

  --master-detail-leftover-width: calc(
    100vw - var(--current-sidebar-width) - var(--page-content-max-width)
  );

  display: grid;
  width: 100%;
  height: 100%;

  grid-template:
    'Sidebar Content' 100%
    / auto 1fr;

  @media ${m.a.tablet} {
    grid-template:
      'Content' 100%
      / 1fr;
  }

  background-color: var(--color-layer-base);
`,u.Master=c.c.div`
  grid-area: Sidebar;

  @media ${m.a.tablet} {
    display: none;
  }

  border-right: solid 1px var(--color-border-grey);
  width: var(--current-sidebar-width);
  height: 100%;
  overflow-y: auto;

  &:hover,
  &:hover ~ * {
    will-change: width;
  }

  transition: width 0.2s, opacity 0.2s, transform 0.2s;
  transform: perspective(1000px);
  transform-origin: left;

  ${({isSidebarOpen:e})=>!e&&c.b`
      opacity: 0;
      pointer-events: none;
      transform: perspective(1000px) translateZ(-200px);
    `}
`,u.MasterCollapsedDrawer=c.c.div`
  grid-area: Sidebar;
  z-index: 1;
  transition: opacity 0.2s;

  display: flex;
  border-right: solid 1px var(--color-border-grey);
  cursor: pointer;

  > svg {
    margin: auto;
  }

  &:hover {
    > svg * {
      stroke: var(--color-text-light);
    }
  }

  @media ${m.a.tablet} {
    display: none;
  }

  ${({isSidebarOpen:e})=>e&&c.b`
      opacity: 0;
      pointer-events: none;
    `}
`,u.Detail=c.c.div`
  display: grid;
  grid-template-columns: min(100%, var(--page-content-max-width));
  justify-content: center;
  overflow-y: auto;
`;var E=t(54),O=t(30),v=t(2),g="_32KCJs-A1zdzZU4IIzBgMa",h="_24oYVAe9Tb5EbauY6AEcLx";const SidebarHeader=({title:e,setIsSidebarOpen:a,showHide:t=!0,stringGetter:n})=>l.a.createElement("div",{className:g},l.a.createElement("span",null,e),t&&l.a.createElement("div",{role:"button",tabIndex:0,className:h,onClick:()=>a(!1)},n({key:v.a.HIDE})));SidebarHeader.propTypes={title:i.a.string,setIsSidebarOpen:i.a.func.isRequired,showHide:i.a.bool,stringGetter:i.a.func.isRequired};var I=Object(O.d)(Object(o.c)(null,e=>Object(E.b)({setIsSidebarOpen:d.c},e))(SidebarHeader)),f=t(91),y=t.n(f),S=t(89),T=t(13),k=t.n(T),_="_103NvBb3fIO7afwK3BWeGE",R="_3syQNM8U83a_SGNOLvgsKd",w="_1PKYM8jdHG-_kSMdPVfzHP",N="_7-EFAWv9XDlD1RqRbb9tf",j="_1RWOTXd0cSMI-Kdr_ekTy",C="_1Hbi4Ub-j7VlOoxPggVw7J",V="_2FLo1daTVtbhQqTHo2woLj",F="_38ZFgk2pvGLPCU_FvqtL5w",P="Ld0B8w1SVTsHxx6LfRgoY";const SidebarMenuItem=({className:e,detail:a,icon:t,iconRemoveBackground:n,iconUsesFill:r,iconUsesStroke:i,isTinyIcon:o,isButton:c,isExternalLink:s,label:d,labelClassName:b,linkTo:m,onClick:p=y.a,selected:u})=>{const E=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:k()(C,b)},l.a.createElement("div",{className:k()(V,{[P]:o,[j]:r,[N]:i,[F]:n})},t),d),a&&l.a.createElement("div",{className:w},a));return c?l.a.createElement("div",{role:"button",tabIndex:0,className:k()(_,e),onClick:p},E):s?l.a.createElement("a",{href:m,target:"_blank",rel:"noopener noreferrer",className:k()(_,e),onClick:p},E):l.a.createElement(S.a,{to:m,className:k()(_,{[R]:u},e),onClick:p},E)};SidebarMenuItem.propTypes={className:i.a.string,detail:i.a.oneOfType([i.a.arrayOf(i.a.node),i.a.node]),icon:i.a.node,iconRemoveBackground:i.a.bool,iconUsesFill:i.a.bool,iconUsesStroke:i.a.bool,isButton:i.a.bool,isExternalLink:i.a.bool,isTinyIcon:i.a.bool,label:i.a.oneOfType([i.a.string,i.a.node,i.a.arrayOf(i.a.node)]).isRequired,labelClassName:i.a.string,linkTo:i.a.string.isRequired,onClick:i.a.func,selected:i.a.bool};var x=SidebarMenuItem},1789:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(1),i=t.n(r),o=t(28),c=t(14),s=t(13),d=t.n(s),b=t(30),m=t(15),p=t(1764),u=t(35),E=t(183),O=t(118),v=t(33),g=t(314),h=t(364),I=t(57),f=t(586),y=t(2),S=t(19),T=t(184),k=t(26),_=t(27),R=t(1725);const w=Object(n.lazy)(()=>Promise.all([t.e(0),t.e(10),t.e(20),t.e(1),t.e(57)]).then(t.bind(null,1877))),N=Object(n.lazy)(()=>Promise.all([t.e(1),t.e(73)]).then(t.bind(null,1868))),j=Object(n.lazy)(()=>Promise.all([t.e(1),t.e(79)]).then(t.bind(null,1892))),C=Object(n.lazy)(()=>Promise.all([t.e(21),t.e(87)]).then(t.bind(null,1886))),V=Object(n.lazy)(()=>Promise.all([t.e(1),t.e(63)]).then(t.bind(null,1881))),PortfolioPage=({location:e,stringGetter:a})=>{var t,r;const i=Object(c.e)(),s=Object(c.f)(f.a),b=null!==(t=Object(c.f)(h.a))&&void 0!==t?t:{},F=null!==(r=Object(c.f)(g.a))&&void 0!==r?r:[],P=Object(c.f)(I.m,c.d),x=e.pathname.includes(S.l.POSITIONS),D=e.pathname.includes(S.l.ORDERS),L=Object.values(b).filter(({status:e})=>e===T.b.OPEN).length,W=F.filter(({status:e})=>![k.c.CANCELED,k.c.FILLED].includes(e)).length;return l.a.createElement(p.c,{sidebar:(()=>{var t;return l.a.createElement("div",{className:R.a.sidebar},l.a.createElement("div",null,l.a.createElement(p.a,{title:a({key:y.a.VIEWS})}),l.a.createElement(p.b,{iconUsesStroke:!0,isTinyIcon:!0,icon:l.a.createElement(m.db,null),label:a({key:y.a.OVERVIEW}),linkTo:S.l.OVERVIEW,selected:!(!Object(o.f)(e.pathname,{path:S.l.OVERVIEW})&&!Object(o.f)(e.pathname,{path:S.j.REFERRAL}))}),l.a.createElement(p.b,{className:d()(R.a.menuItemWithTag,{[R.a.selected]:x}),iconUsesFill:!0,icon:l.a.createElement(m.t,null),label:l.a.createElement(l.a.Fragment,null,a({key:y.a.POSITIONS}),L>0&&l.a.createElement(O.a,{muted:!0,className:R.a.sidebarNavTag},L)),linkTo:S.l.POSITIONS,selected:x}),l.a.createElement(p.b,{className:d()(R.a.menuItemWithTag,{[R.a.selected]:D}),iconUsesStroke:!0,icon:l.a.createElement(m.ab,null),label:l.a.createElement(l.a.Fragment,null,a({key:y.a.ORDERS}),W>0&&l.a.createElement(O.a,{muted:!0,className:R.a.sidebarNavTag},W)),linkTo:S.l.ORDERS,selected:D}),l.a.createElement(p.b,{iconUsesFill:!0,icon:l.a.createElement(m.i,null),label:l.a.createElement(l.a.Fragment,null,a({key:y.a.FEES}),l.a.createElement(O.a,{purple:!0,usePillStyles:!0},a({key:y.a.NEW}))),linkTo:S.l.FEES,selected:e.pathname.includes(S.l.FEES)}),l.a.createElement(p.b,{iconUsesFill:!0,icon:l.a.createElement(m.L,null),label:a({key:y.a.HISTORY}),linkTo:S.l.HISTORY,selected:e.pathname.includes(S.l.HISTORY)})),s&&"boolean"===typeof(null===P||void 0===P?void 0:P.isRestricted)&&l.a.createElement("div",{className:R.a.sidebarButtons},l.a.createElement(u.a,{size:u.d.Large,onClick:()=>i(Object(v.c)({modalType:_.a.WITHDRAW}))},a({key:y.a.WITHDRAW})),l.a.createElement(u.a,{color:null!==s&&void 0!==s&&null!==(t=s.equity)&&void 0!==t&&t.isZero()?u.b.Purple:u.b.Lighter,disabled:!(null!==P&&void 0!==P&&P.canDeposit),size:u.d.Large,onClick:()=>i(Object(v.c)({modalType:_.a.DEPOSIT}))},a({key:y.a.DEPOSIT}))))})()},l.a.createElement(n.Suspense,{fallback:l.a.createElement(E.a,{id:"portfolio-page"})},l.a.createElement(o.d,null,l.a.createElement(o.b,{path:S.l.OVERVIEW,component:w}),l.a.createElement(o.b,{path:S.l.POSITIONS,component:N}),l.a.createElement(o.b,{path:S.l.ORDERS,component:j}),l.a.createElement(o.b,{path:S.l.FEES,component:C}),l.a.createElement(o.b,{path:S.l.HISTORY,component:V}),l.a.createElement(o.b,{path:S.j.REFERRAL,component:w}),l.a.createElement(o.b,{path:S.j.MANAGE_NOTIFICATIONS,component:w}),l.a.createElement(o.a,{to:S.l.OVERVIEW}))))};PortfolioPage.propTypes={location:i.a.object.isRequired,stringGetter:i.a.func.isRequired},a.default=Object(b.d)(Object(o.i)(PortfolioPage))}}]);