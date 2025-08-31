# Student Affairs Council - IIT Delhi

This is the official website for the Student Affairs Council (SAC), IIT Delhi.
## Project Structure

```
sac-iitd/
├── public/                # Static assets served directly
├── src/
│   ├── assets/            # Project assets (images, icons, fonts)
│   ├── components/        # Reusable components
│   │   ├── layout/        # Layout components (Navbar, Footer, etc.)
│   │   └── ui/            # UI components (Button, Card, etc.)
│   ├── contexts/          # React contexts
│   ├── hooks/             # Custom React hooks (Only for custom hooks, pls don't place every hook in this folder)
│   ├── pages/             # Page components
│   ├── services/          # API and external service integrations
│   └── utils/             # Utility functions
└── config files
```

## Code Style and Naming Conventions

### Files and Directories

- Use PascalCase for React component files: `Button.jsx`, `Navbar.jsx`
- Use camelCase for utility files: `formatters.js`, `helpers.js`
- Use kebab-case for CSS files: `button-styles.css`
- Group related files in appropriately named directories

### Components

- Use functional components with hooks instead of class components
- Use PascalCase for component names: `function Button() {...}`
- Create only one component per file
- Destructure props in the function parameter


### Styling

- Use Tailwind CSS for styling
- Create custom classes in **App.css** when needed
- Use descriptive class names following Tailwind conventions
- Theme Implementation:
  - Use CSS **variables defined in index.css** for theming
  - Access theme via the `ThemeContext` for conditional styling
  - Always use `--bg-color`, `--text-color`, `--card-bg`, and `--primary` variables instead of hardcoding colors (You can make new in **index.css** if needed)
- Responsive Design:
  - Use standard breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
  - Avoid fixed width/height when possible, use relative units
- Consistency:
  - Maintain consistent spacing using Tailwind's spacing scale
  - Use semantic HTML elements with appropriate styling
  - Keep padding/margin consistent across similar components
- Component Styling:
  - Extract common styles into reusable components
  - Use Tailwind's @apply directive for complex, reusable styles

### JavaScript

- Use camelCase for variables and functions
- Use PascalCase for classes and component names
- Use UPPERCASE for constants


### Contributing

1. Follow the established code style and naming conventions
2. Submit pull requests instead of directly commiting
3. Keep commits atomic and descriptive