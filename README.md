# JS211_Hackathon
### Prompt 1: Hang Man

**Project Objective** - This is a terminal based app. Reveal a letter from a word if a user inputs that letter and it exists in the word. If it doesn't let the user know.

Example

<table class="highlighttable"><tbody><tr><td class="linenos"><div class="linenodiv"><pre><span></span><span class="normal"> 1</span>
<span class="normal"> 2</span>
<span class="normal"> 3</span>
<span class="normal"> 4</span>
<span class="normal"> 5</span>
<span class="normal"> 6</span>
<span class="normal"> 7</span>
<span class="normal"> 8</span>
<span class="normal"> 9</span>
<span class="normal">10</span>
<span class="normal">11</span>
<span class="normal">12</span>
<span class="normal">13</span>
<span class="normal">14</span>
<span class="normal">15</span>
<span class="normal">16</span>
<span class="normal">17</span></pre></div></td><td class="code"><div><pre><span></span><code><span class="go">  Input: Any letter</span>
<span class="go">  _ _ _ _ _</span>

<span class="go">  L (input)</span>
<span class="go">  _ _ L L _ (return)</span>

<span class="go">  H (input)</span>

<span class="go">  H _ L L _</span>

<span class="go">  E (input)</span>

<span class="go">  H E L L _</span>

<span class="go">  O (input)</span>

<span class="go">  H E L L O</span>
</code></pre></div></td></tr></tbody></table>

Instructions

<table class="highlighttable"><tbody><tr><td class="linenos"><div class="linenodiv"><pre><span></span><span class="normal">1</span>
<span class="normal">2</span>
<span class="normal">3</span>
<span class="normal">4</span>
<span class="normal">5</span>
<span class="normal">6</span>
<span class="normal">7</span>
<span class="normal">8</span></pre></div></td><td class="code"><div><pre><span></span><code>  <span class="k">1.</span> First build this project in the terminal
  <span class="k">2.</span> Then attach it to the DOM
  <span class="k">3.</span> Work through the challenge together
  <span class="k">4.</span> As always whiteboard it and make a code plan
  <span class="k">5.</span> Translate from English to pseudo code then to JavaScript
  <span class="k">6.</span> Test
  <span class="k">7.</span> Present to class
  <span class="k">8.</span> Turn in the URL to your repo, once for each person in your group
</code></pre></div></td></tr></tbody></table>

Push Yourself Further

<table class="highlighttable"><tbody><tr><td class="linenos"><div class="linenodiv"><pre><span></span><span class="normal"> 1</span>
<span class="normal"> 2</span>
<span class="normal"> 3</span>
<span class="normal"> 4</span>
<span class="normal"> 5</span>
<span class="normal"> 6</span>
<span class="normal"> 7</span>
<span class="normal"> 8</span>
<span class="normal"> 9</span>
<span class="normal">10</span>
<span class="normal">11</span></pre></div></td><td class="code"><div><pre><span></span><code>  Further Practice Challenge - Keep track of the user's lives, so if they guess incorrectly they lose a life.

  Challenge example:

  _ _ _ _ _

  V (input)

  "V" is not in the word! 4 lives left!

  _ _ _ _ _
</code></pre></div></td></tr></tbody></table>

### Prompt 2: Ramp Numbers

A ramp number is a number whose digits from left to right either only rise or stay the same. 1234 is a ramp number and so is 1124 and 13569. But 1032 is not and neither is 1528.

Challenge: Given the input of a number, build a program that will find the total number of ramp numbers that are less than it.

Example:

Code Example

<table class="highlighttable"><tbody><tr><td class="linenos"><div class="linenodiv"><pre><span></span><span class="normal">1</span>
<span class="normal">2</span>
<span class="normal">3</span>
<span class="normal">4</span>
<span class="normal">5</span></pre></div></td><td class="code"><div><pre><span></span><code><span class="w">  </span><span class="kd">const</span><span class="w"> </span><span class="nx">numOfRampsBelow</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="p">(</span><span class="nx">num</span><span class="p">)</span><span class="w"> </span><span class="p">=&gt;</span><span class="w"> </span><span class="p">{</span><span class="w"></span>
<span class="w">    </span><span class="c1">//  Your code goes here</span><span class="w"></span>
<span class="w">  </span><span class="p">}</span><span class="w"></span>

<span class="w">  </span><span class="nx">numOfRampsBelow</span><span class="p">(</span><span class="mf">99999</span><span class="p">)</span><span class="w"> </span><span class="c1">// =&gt; "2001 total ramp numbers are less than 99999"</span><span class="w"></span>
</code></pre></div></td></tr></tbody></table>

Example 2

<table class="highlighttable"><tbody><tr><td class="linenos"><div class="linenodiv"><pre><span></span><span class="normal">1</span>
<span class="normal">2</span>
<span class="normal">3</span>
<span class="normal">4</span>
<span class="normal">5</span>
<span class="normal">6</span>
<span class="normal">7</span></pre></div></td><td class="code"><div><pre><span></span><code>  Given: A positive integer, n.

  Output: The number of total ramp numbers less than n.

  Example input: 123

  Example output: 65 total ramp numbers are less than 123
</code></pre></div></td></tr></tbody></table>

Instructions

<table class="highlighttable"><tbody><tr><td class="linenos"><div class="linenodiv"><pre><span></span><span class="normal">1</span>
<span class="normal">2</span>
<span class="normal">3</span>
<span class="normal">4</span>
<span class="normal">5</span>
<span class="normal">6</span>
<span class="normal">7</span>
<span class="normal">8</span>
<span class="normal">9</span></pre></div></td><td class="code"><div><pre><span></span><code>  <span class="k">1.</span> First build this project in the terminal
  <span class="k">2.</span> Then attach it to the DOM
  <span class="k">3.</span> Work through the challenge together
  <span class="k">4.</span> As always whiteboard it and make a code plan
  <span class="k">5.</span> Translate from English to pseudo code then to JavaScript
  <span class="k">6.</span> When you finish work on the Further Practice Challenge
  <span class="k">7.</span> Test
  <span class="k">8.</span> Present to class
  <span class="k">9.</span> Turn in the URL to your repo, once for each person in your group
</code></pre></div></td></tr></tbody></table>

Push Yourself Further

<table class="highlighttable"><tbody><tr><td class="linenos"><div class="linenodiv"><pre><span></span><span class="normal">1</span></pre></div></td><td class="code"><div><pre><span></span><code>  Further Practice Challenge - Display all of the ramp numbers that are less than the input number (n).
</code></pre></div></td></tr></tbody></table>

### Prompt 3: Count It

Given a sentence, paragraph or novel, count the letters in the string. Ignore whitespace and anything not `[a-z][A-Z]`, i.e. punctuations and numbers.

Example

<table class="highlighttable"><tbody><tr><td class="linenos"><div class="linenodiv"><pre><span></span><span class="normal">1</span>
<span class="normal">2</span>
<span class="normal">3</span></pre></div></td><td class="code"><div><pre><span></span><code><span class="go">  Given: A string - like "Hello World"</span>

<span class="go">  Output: Letters and how often they show up. - d:1 e:1 h:1 l:3 o:2 r:1 w:1</span>
</code></pre></div></td></tr></tbody></table>

Instructions

<table class="highlighttable"><tbody><tr><td class="linenos"><div class="linenodiv"><pre><span></span><span class="normal"> 1</span>
<span class="normal"> 2</span>
<span class="normal"> 3</span>
<span class="normal"> 4</span>
<span class="normal"> 5</span>
<span class="normal"> 6</span>
<span class="normal"> 7</span>
<span class="normal"> 8</span>
<span class="normal"> 9</span>
<span class="normal">10</span>
<span class="normal">11</span></pre></div></td><td class="code"><div><pre><span></span><code>  <span class="k">1.</span> First build this project in the terminal
  <span class="k">2.</span> Then attach it to the DOM
  <span class="k">3.</span> Work through the challenge together
  <span class="k">4.</span> As always whiteboard it and make a code plan
<span class="k">    &gt; </span><span class="ge">Hint: convert all to lowercase first</span>
  <span class="k">5.</span> Translate from English to pseudo code then to JavaScript
  <span class="k">6.</span> Test
  <span class="k">7.</span> Present to class
  <span class="k">8.</span> Turn in the URL to your repo, once for each person in your group

<span class="k">  &gt; </span><span class="ge">Use this challenge input: "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day."</span>
</code></pre></div></td></tr></tbody></table>

Push Yourself Further

<table class="highlighttable"><tbody><tr><td class="linenos"><div class="linenodiv"><pre><span></span><span class="normal">1</span>
<span class="normal">2</span>
<span class="normal">3</span>
<span class="normal">4</span></pre></div></td><td class="code"><div><pre><span></span><code>  <span class="k">1.</span> Use RegEx
  <span class="k">2.</span> Make a word count
  <span class="k">3.</span> Count each word's appearance
  <span class="k">4.</span> [<span class="nt">Calculate the grade level/proficiency of English</span>](<span class="na">https://www.thoughtco.com</span></code></pre></div></td></tr></tbody></table>