# ✊✋✌️ Stone Paper Scissors Game

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

A fun and interactive browser-based implementation of the classic Stone Paper Scissors (Rock Paper Scissors) game built with vanilla JavaScript, HTML, and CSS. Challenge the computer and test your luck in this timeless hand game!

## 🎮 Live Demo

**Play Now:** [https://vajjipartisatwikraj.github.io/stone-paper-scissors/](https://vajjipartisatwikraj.github.io/stone-paper-scissors/)

## ✨ Features

- **🎯 Interactive Gameplay** - Click to choose your weapon: Stone, Paper, or Scissors
- **🤖 Smart Computer AI** - Randomized computer choices for unpredictable gameplay
- **📊 Live Score Tracking** - Real-time score updates for both player and computer
- **🎨 Clean UI/UX** - Modern, responsive design with smooth animations
- **⚡ Fast Performance** - Lightweight vanilla JavaScript implementation
- **📱 Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **🔄 Restart Functionality** - Easy game reset to start a new match
- **🎯 Win Detection** - Automatic winner determination with visual feedback

## 🎲 Game Rules

The classic rules of Stone Paper Scissors:

- **Stone 🪨 beats Scissors ✂️** (Stone crushes Scissors)
- **Scissors ✂️ beats Paper 📄** (Scissors cut Paper)
- **Paper 📄 beats Stone 🪨** (Paper covers Stone)
- **Same choices result in a Tie 🤝**

## 🚀 How to Play

1. **Choose Your Weapon** - Click on Stone, Paper, or Scissors button
2. **Computer Makes Choice** - The computer randomly selects its weapon
3. **See the Result** - Winner is determined and displayed instantly
4. **Track Your Score** - Scores are updated automatically
5. **Play Again** - Click restart or make another choice to continue

## 📸 Screenshots

![Game Interface](https://res.cloudinary.com/dpimdnvpr/image/upload/v1767170664/Screenshot_2025-12-31_141358_hl3sgm.png)
*Clean and intuitive game interface*

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Styling, animations, and responsive design
- **JavaScript (ES6+)** - Game logic and DOM manipulation
- **GitHub Pages** - Hosting and deployment

## 📦 Installation & Setup

### Option 1: Play Online
Simply visit the [live demo](https://vajjipartisatwikraj.github.io/stone-paper-scissors/) and start playing!

### Option 2: Run Locally

1. **Clone the repository**
```bash
git clone https://github.com/vajjipartisatwikraj/stone-paper-scissors.git
```

2. **Navigate to the project directory**
```bash
cd stone-paper-scissors
```

3. **Open in your browser**
```bash
# Open index.html directly in your browser
# Or use a local server (recommended)
```

### Using Local Server

**Python:**
```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

**Node.js:**
```bash
npx http-server
```

**VS Code:**
- Install Live Server extension
- Right-click on `index.html` → Open with Live Server

Visit `http://localhost:8000` in your browser.

## 📂 Project Structure

```
stone-paper-scissors/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with animations
├── script.js           # Game logic and functionality
├── assets/             # Images and icons
│   ├── stone.png
│   ├── paper.png
│   ├── scissors.png
│   └── screenshots/
├── README.md           # Project documentation
└── LICENSE             # MIT License
```

## 💻 Code Implementation

### Game Logic (JavaScript)

```javascript
// Computer's random choice
function computerPlay() {
  const choices = ['stone', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Determine the winner
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'tie';
  }

  if (
    (playerChoice === 'stone' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'stone')
  ) {
    return 'player';
  }

  return 'computer';
}

// Update scores and display result
function playRound(playerChoice) {
  const computerChoice = computerPlay();
  const result = determineWinner(playerChoice, computerChoice);

  updateScore(result);
  displayResult(playerChoice, computerChoice, result);
}
```

## 🎨 Key Features Implementation

### Random Computer Selection
The computer makes a random choice using JavaScript's `Math.random()` function to ensure fair and unpredictable gameplay.

### Winner Determination Algorithm
A logical comparison system checks all possible combinations to determine the winner based on classic game rules.

### Score Tracking
Real-time score updates using DOM manipulation to reflect player and computer wins.

### Visual Feedback
CSS animations and transitions provide visual feedback for choices and results.

## 🎯 Game Features Breakdown

| Feature | Description | Status |
|---------|-------------|--------|
| Player vs Computer | Play against AI opponent | ✅ Implemented |
| Score Tracking | Live score updates | ✅ Implemented |
| Responsive Design | Works on all devices | ✅ Implemented |
| Restart Game | Reset scores and start over | ✅ Implemented |
| Animations | Smooth choice animations | ✅ Implemented |
| Sound Effects | Audio feedback | 🔄 Planned |
| Best of N Rounds | Set custom round limits | 🔄 Planned |
| Multiplayer Mode | Player vs Player | 🔄 Planned |

## 🎨 Customization

### Change Color Theme

Edit `style.css`:
```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --danger-color: #e74c3c;
  --background-color: #ecf0f1;
  --text-color: #2c3e50;
}
```

### Modify Game Rounds

In `script.js`:
```javascript
const MAX_ROUNDS = 10; // Change to desired number of rounds
const WINNING_SCORE = 5; // First to reach this score wins
```

## 🔧 Advanced Features

### Add Sound Effects

```javascript
function playSound(soundType) {
  const audio = new Audio(`./sounds/${soundType}.mp3`);
  audio.play();
}
```

### Add Animations

```css
.choice-btn:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

.winning-animation {
  animation: pulse 0.5s ease-in-out;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help improve this game:

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Make your changes**
   - Add new features
   - Fix bugs
   - Improve UI/UX
   - Enhance animations
4. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
6. **Open a Pull Request**

### Contribution Ideas

- Add sound effects and background music
- Implement difficulty levels (Easy, Medium, Hard)
- Add multiplayer functionality
- Create leaderboard with local storage
- Add different game modes (Best of 3, Best of 5, etc.)
- Implement gesture recognition for mobile
- Add character/avatar selection
- Create tournament mode
- Add statistics and win rate tracking

### Development Guidelines

- Write clean, readable code with comments
- Follow existing code style and conventions
- Test thoroughly on multiple browsers and devices
- Ensure responsive design is maintained
- Update documentation for new features

## 🐛 Bug Reports & Feature Requests

Found a bug or have an idea? [Open an issue](https://github.com/vajjipartisatwikraj/stone-paper-scissors/issues)!

**For Bug Reports:**
- Describe the bug clearly
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser and OS information

**For Feature Requests:**
- Detailed feature description
- Use cases and benefits
- Mockups or examples (optional)

## 📈 Roadmap

### Phase 1 - Core Game ✅
- [x] Basic game mechanics
- [x] Player vs Computer
- [x] Score tracking
- [x] Responsive design
- [x] Restart functionality

### Phase 2 - Enhancements 🔄
- [ ] Sound effects and music
- [ ] Win/lose animations
- [ ] Game statistics
- [ ] Local storage for scores
- [ ] Dark mode toggle

### Phase 3 - Advanced Features 📋
- [ ] Multiplayer mode (Player vs Player)
- [ ] AI difficulty levels
- [ ] Tournament mode
- [ ] Leaderboard system
- [ ] Social sharing
- [ ] Multiple languages support

### Phase 4 - Mobile App 🚀
- [ ] Progressive Web App (PWA)
- [ ] Offline functionality
- [ ] Mobile app version
- [ ] Gesture controls
- [ ] Push notifications

## 🧪 Testing

### Browser Compatibility

Tested and working on:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

### Device Testing

- ✅ Desktop (1920x1080 and above)
- ✅ Laptop (1366x768 and above)
- ✅ Tablet (768x1024)
- ✅ Mobile (320x568 and above)

## 🚀 Deployment

### GitHub Pages (Current)

Already deployed at: [https://vajjipartisatwikraj.github.io/stone-paper-scissors/](https://vajjipartisatwikraj.github.io/stone-paper-scissors/)

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

Drag and drop your project folder to [Netlify Drop](https://app.netlify.com/drop)

Or use Netlify CLI:
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy
```

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Vajjiparti Satwik Raj

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

## 👨‍💻 Author

**Vajjiparti Satwik Raj**

Full-Stack Software Engineer | Game Developer | JavaScript Enthusiast

- 🌐 GitHub: [@vajjipartisatwikraj](https://github.com/vajjipartisatwikraj)
- 💼 LinkedIn: [Connect with me](https://linkedin.com/in/yourprofile)
- 📧 Email: your.email@example.com
- 🌍 Location: Hyderabad, Telangana, India
- 💻 Portfolio: [Your Portfolio Website]
- 🎮 Play the Game: [Live Demo](https://vajjipartisatwikraj.github.io/stone-paper-scissors/)

## 🌟 Acknowledgments

- Game concept inspired by the classic Stone Paper Scissors hand game
- Built with vanilla JavaScript for optimal performance
- Icons and images from various open-source resources
- Thanks to the web development community for inspiration and support
- Special thanks to all contributors and players
- Built with 💙 for game lovers worldwide

## 📚 Related Projects

- [TextUtils](https://github.com/vajjipartisatwikraj/techtutors) - Text analysis tool
- [Other JavaScript Games](#) - More browser-based games
- [Rock Paper Scissors Lizard Spock](https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock) - Extended version

## 🎓 Learning Resources

- [MDN Web Docs - JavaScript Game Development](https://developer.mozilla.org/en-US/docs/Games)
- [JavaScript.info - Browser Events](https://javascript.info/events)
- [CSS-Tricks - CSS Animations](https://css-tricks.com/almanac/properties/a/animation/)
- [W3Schools - JavaScript Tutorial](https://www.w3schools.com/js/)

## 💡 Support

If you enjoy this game, please consider:

- ⭐ **Star this repository** on GitHub
- 🍴 **Fork and create your version**
- 📢 **Share with friends** who love games
- 🐛 **Report bugs** to help improve the game
- 💬 **Provide feedback** on gameplay experience
- ☕ **Buy me a coffee** (if donation link available)

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/vajjipartisatwikraj/stone-paper-scissors?style=social)
![GitHub forks](https://img.shields.io/github/forks/vajjipartisatwikraj/stone-paper-scissors?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/vajjipartisatwikraj/stone-paper-scissors?style=social)
![GitHub issues](https://img.shields.io/github/issues/vajjipartisatwikraj/stone-paper-scissors)
![GitHub pull requests](https://img.shields.io/github/issues-pr/vajjipartisatwikraj/stone-paper-scissors)

## 🎮 Fun Facts

- Rock Paper Scissors has been played for centuries
- The game is called "Jan-Ken-Pon" in Japan
- There are Rock Paper Scissors championships worldwide
- The game is often used to make quick decisions
- Scientists study RPS strategies using game theory

## 📞 Contact

Questions or suggestions? Get in touch!

- 📧 Email: satwikrajv@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/vajjipartisatwikraj/stone-paper-scissors/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/vajjipartisatwikraj/stone-paper-scissors/discussions)

---

<div align="center">

**Made with 💙 and JavaScript by Satwik Raj**

[⭐ Star this repo](https://github.com/vajjipartisatwikraj/stone-paper-scissors) | [🎮 Play the Game](https://vajjipartisatwikraj.github.io/stone-paper-scissors/)

**[⬆ Back to Top](#-stone-paper-scissors-game)**

</div>
