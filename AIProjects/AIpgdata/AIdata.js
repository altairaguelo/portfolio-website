import AIgif from '../AIpgassets/blackjackAIgif.gif';
import twenty from '../AIpgassets/2048.gif';
import Astar from '../AIpgassets/Astar.gif';
import go from '../AIpgassets/Go.gif';
import sudoku from '../AIpgassets/sudoku.png';
export default [
    {
        title: 'Finding Paths: BFS, DFS, UCS, and A*',
        imgUrl: Astar,
        stack: [`In this program, I found possible paths using different methods that included BFS, DFS, UCS, and A*.
                    Finding a path from the start to the goal included considering different tile costs, black being 'cheap', green being 'expensive,' 
                    and blue indicating an obstacle. Notably, to find the optimal path, the A* algorithm I implemented used a heuristic function using manhattan distance
                    between the current node and the goal node, and considered this heuristic cost along with the real cost described above. The short video above shows A* finding
                    the optimal path, also finding this path quickly in relation to the other path finding methods.`],
        link: 'https://streamable.com/y9bt64'
    },
    {
        title: '2048 Solver: Expectimax',
        imgUrl: twenty,
        stack: [`To score higher in 2048, I built expectimax trees of depth 3 at each state of the game and simulated each possible action (up, down, left, right) and the related next 
                    state that happens due to that action. Doing this, I was able to simulate a sliding window across possible states and actions in a 2048 game, and choose the actions
                    based on the simulated actions and states that maximized my score. The sliding window allowed the program to calculate this in a timely manner, while the expected scores 
                    from each action allowed me to maximize my score within that window, which in turn allowed the program to perform pretty well.`],
        link: 'https://streamable.com/czxpsa'
    },
    {
        title: 'Maximizing Blackjack Odds: Monte Carlo, Temporal Difference, and QLearning',
        imgUrl: AIgif,
        stack: [`In this program, I maximized my odds at winning blackjack using Monte Carlo, Temporal Difference, and QLearning. During this process, it became clear that QLearning performed 
                    better due to its ability to learn which actions return better rewards, so I will focus on explaning QLearning. Using QLearning, 
                    my program simulated states and actions in blackjack and chose actions that led to maximizing rewards. To choose these actions, my algorithm followed an epsilon greedy
                    strategy, allowing the algorithm to both explore new actions, and choose optimal, high reward actions. During these simulations, certain states and action pairs would 
                    be noted having the ability to maximize reward, so in actual play, when the program actually faces such states, it will know which actions to take to get to states that 
                    will maximize reward.`],
        link: 'https://streamable.com/fzsisg'
    },
    {
        title: 'Gomoku: Beating opponents using Monte Carlo Tree Search and Upper Confidence Bounds',
        imgUrl: go,
        stack: [`For the game of Gomoku, I implemented Monte Carlo Tree Search to win against a bot. From the starting state, the algorithm considers possible actions to take on
                    on the board, balancing exploration and optimality using Upper Confidence Bounds(UCB). As the game plays out, the algorithm simulates these possible actions 
                    within a set time, and this sampling distribution over possible game trajectories becomes more skewed toward better actions/futures due to the UCB. So, the algorithm 
                    further explores the known, good paths/actions/states, and know the best actions to take due to the sampling from the implementation of MCTS.`],
        link: 'https://streamable.com/pwk7uq'
    },
    {
        title: 'Sudoku: Solving through Constraints',
        imgUrl: sudoku,
        stack: [`To solve sudoku problems, I implemented a constraint system that outlined rules for placement of numbers on the sudoku board. For each spot on the board, the game starts with 
                    any assigned spots having their domains set to only the assigned number in that spot, and an assignment function that notes each spot that is already assigned on the board. 
                    The unassigned spots have their domains set to follow the constraints, taking into account the already assigned spots within rows, columns, and boxes. To progress the game, 
                    the program assigns a number to the spot from the allowed numbers given by the domain of that spot. This continues until the game is solved or a spot cannot have any numbers placed,
                    of which the program backtracks to the previous decision that caused this issue and tries another action. If the game reaches a point where backtracking is not possible, then the sudoku puzzle is not solvable.`],
        link: 'https://imgur.com/a/zjpg4NW'
    }
]