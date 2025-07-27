import './App.css'
import 'valkoma-package/dist/style.css';


import { ThemeProvider } from 'valkoma-package/hooks'
import { ModeToggle } from 'valkoma-package/design-system'
import { RouterProvider } from 'react-router-dom';
import { router } from './components/router';

function App() {

  return (
    <ThemeProvider>
      <div className="fixed bottom-4 left-4 z-50">
        <ModeToggle />
      </div>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App




{/* <span className="h-[300px] w-full flex">
          <img
            alt=""
            src="https://library.shadcnblocks.com/images/block/placeholder-1.svg"
            className="w-full h-full object-cover"
          />
        </span>
        <p>Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One day, his advisors came to him with a problem: the kingdom was running out of money.</p>
        <h2>The King's Plan</h2>
        <p>
          The king thought long and hard, and finally came up with a brilliant plan: he would tax the jokes in the kingdom.
        </p>
        <blockquote>
          “After all,” he said, “everyone enjoys a good joke, so it's only fair that they should pay for the privilege.”
        </blockquote>
        <h3>The Joke Tax</h3>
        <p>The king's subjects were not amused. They grumbled and complained, but the king was firm:</p>
        <li>
          1st level of puns: 5 gold coins
        </li>
        <li>
          2nd level of jokes: 10 gold coins
        </li>
        <li>
          3rd level of one-liners : 20 gold coins
        </li> */}