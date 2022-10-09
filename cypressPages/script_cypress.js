{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 describe(' Open link in same tab',()=>\
\{\});\
    it.only('loads the page using approach1', () => \{\
    cy.visit('https://test.io/coverage/website-testing')\
    cy.get('a.cta-button__button.button-cta--get-a-demo').first()\
    .invoke('attr','target','_self').click(\{force:true\})\
\
  \
  \});\
\
  it.only('loads the page using approach2', () => \{\
    cy.visit('https://test.io/coverage/website-testing')\
    cy.get('button#onetrust-accept-btn-handler').click()    \
    cy.get('a.cta-button__button.button-cta--get-a-demo').first()\
    .invoke('removeAttr','target').click(\{force:true\});\});\
}