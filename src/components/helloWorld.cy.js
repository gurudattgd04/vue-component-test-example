/// <reference types="cypress" />

import HelloWorld from "./HelloWorld.vue";

describe("Vue Component test", () => {
  it("HelloWorld vue component test", () => {
    cy.mount(HelloWorld, { props: { msg: "Hello Vitest" } });
    cy.get("a[href='https://vitejs.dev/']").invoke("text").should("eq", "Vite");
  });
});

// cy.contains("Hello Vitest");
