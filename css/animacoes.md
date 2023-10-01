# Animações

- Usadas para animar elemenos dentro de uma página.
- @keyframes são usados para definir animações reutilizáveis.

```css
@keyframes spin {
  to {
    transform: rotate (360deg);
  }
}

.spin-element {
  animation: spin 0.5s infinite ease;
}
```
