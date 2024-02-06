import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as i,c,a as e,b as n,d as a,e as t}from"./app-sebRcgXN.js";const r={},d=e("h1",{id:"development-with-vscode-remote-tunnels",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#development-with-vscode-remote-tunnels"},[e("span",null,"Development with VSCode Remote Tunnels")])],-1),p={href:"https://code.visualstudio.com/docs/remote/tunnels",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,"Let's delve into two scenarios:",-1),m=e("p",null,[e("strong",null,"Scenario 1"),n(": Quantum Leap 🌌")],-1),h={href:"https://code.visualstudio.com/docs/remote/tunnels",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,[e("strong",null,"Scenario 2"),n(": Mobile Marvels 📲")],-1),b={href:"https://code.visualstudio.com/docs/remote/tunnels",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,"To embark on this journey, ensure you have a Microsoft or GitHub account. Follow the steps to work remotely on:",-1),g=e("ul",null,[e("li",null,"Remote machine 🌐"),e("li",null,"WSL2 Instance 🚧"),e("li",null,"Docker container 🐋")],-1),f=e("h2",{id:"remote-machine-🌐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#remote-machine-🌐"},[e("span",null,"Remote Machine 🌐")])],-1),w=e("h3",{id:"step-1-install-code-cli",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#step-1-install-code-cli"},[e("span",null,"Step 1 - Install code CLI")])],-1),S={href:"https://code.visualstudio.com/#alt-downloads",target:"_blank",rel:"noopener noreferrer"},_=t(`<h3 id="step-2-enable-remote-tunnel-access" tabindex="-1"><a class="header-anchor" href="#step-2-enable-remote-tunnel-access"><span>Step 2 - Enable Remote Tunnel Access</span></a></h3><p>Preferably through the command line, log in to your Microsoft account:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>code tunnel user login <span class="token parameter variable">--provider</span> microsoft
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Initiate the tunnel:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>code tunnel <span class="token function">service</span> <span class="token function">install</span> --accept-server-license-terms <span class="token parameter variable">--name</span> <span class="token string">&quot;remote-tunnel&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="step-3-connect-to-remote-machine" tabindex="-1"><a class="header-anchor" href="#step-3-connect-to-remote-machine"><span>Step 3 - Connect to Remote Machine</span></a></h3><h4 id="step-3a-browser-connection" tabindex="-1"><a class="header-anchor" href="#step-3a-browser-connection"><span>Step 3a - Browser Connection</span></a></h4>`,7),x={href:"https://vscode.dev",target:"_blank",rel:"noopener noreferrer"},C=e("li",null,[n("Press "),e("code",null,"Ctrl+Shift+P"),n(" and select "),e("code",null,"Remote-Tunnels: Connect to Tunnel..."),n(".")],-1),y=e("li",null,"Choose Microsoft Account and log in.",-1),D=e("li",null,[n("Select the desired code tunnel created in "),e("a",{href:"#step-2---enable-remote-tunnel-access"},"Step 2")],-1),R=t(`<p>Enjoy seamless operation on your remote machine through the browser, including terminal access and running various commands like vim, tmux, or screen.</p><h4 id="step-3b-vscode-desktop-connection" tabindex="-1"><a class="header-anchor" href="#step-3b-vscode-desktop-connection"><span>Step 3b - VSCode Desktop Connection</span></a></h4><ul><li>Install the Remote Tunnels extension in VSCode Desktop.</li><li>Open VSCode Desktop.</li><li>Press <code>Ctrl+Shift+P</code> and select <code>Remote-Tunnels: Connect to Tunnel...</code>.</li><li>Choose Microsoft Account and log in.</li><li>Select the code tunnel created in <a href="#step-2---enable-remote-tunnel-access">Step 2</a>.</li></ul><p>Now, run applications on your remote machine directly from VSCode Desktop.</p><h2 id="wsl2-instance-🚧" tabindex="-1"><a class="header-anchor" href="#wsl2-instance-🚧"><span>WSL2 Instance 🚧</span></a></h2><p>For a WSL2 instance, follow these steps:</p><h3 id="step-1-enable-systemd" tabindex="-1"><a class="header-anchor" href="#step-1-enable-systemd"><span>Step 1 - Enable systemd</span></a></h3><p>Edit <code>/etc/wsl.conf</code> and add:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>boot<span class="token punctuation">]</span>
<span class="token assign-left variable">systemd</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9),T={href:"https://devblogs.microsoft.com/commandline/systemd-support-is-now-available-in-wsl/",target:"_blank",rel:"noopener noreferrer"},L=t('<h3 id="step-2-install-code-cli-on-wsl2" tabindex="-1"><a class="header-anchor" href="#step-2-install-code-cli-on-wsl2"><span>Step 2 - Install code CLI on WSL2</span></a></h3><p>Same as <a href="#step-1---install-code-cli">Step 1 from Remote Machine</a>.</p><h3 id="step-3-enable-remote-tunnel-access-on-wsl2" tabindex="-1"><a class="header-anchor" href="#step-3-enable-remote-tunnel-access-on-wsl2"><span>Step 3 - Enable Remote Tunnel Access on WSL2</span></a></h3><p>Same as <a href="#step-2---enable-remote-tunnel-access">Step 2 from Remote Machine</a>.</p><h3 id="step-4-connect-to-wsl2-instance" tabindex="-1"><a class="header-anchor" href="#step-4-connect-to-wsl2-instance"><span>Step 4 - Connect to WSL2 Instance</span></a></h3><p>Connect to the remote WSL2 instance through your browser or VSCode Desktop as you would with a regular remote machine.</p><h2 id="docker-container-🐋" tabindex="-1"><a class="header-anchor" href="#docker-container-🐋"><span>Docker Container 🐋</span></a></h2>',7),I={href:"https://code.visualstudio.com/docs/remote/tunnels",target:"_blank",rel:"noopener noreferrer"},V=t(`<h3 id="step-1-build-docker-image" tabindex="-1"><a class="header-anchor" href="#step-1-build-docker-image"><span>Step 1 - Build Docker Image</span></a></h3><p>To connect to a remote tunnel from a Docker container, create a Docker image with the code CLI. Below is a Dockerfile example:</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> ubuntu:22.04</span>

<span class="token comment"># Install git and curl</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get update &amp;&amp; <span class="token operator">\\</span>
    apt-get install -y git curl &amp;&amp; <span class="token operator">\\</span>
    apt-get clean &amp;&amp; <span class="token operator">\\</span>
    rm -rf /var/lib/apt/lists/*</span>

<span class="token comment"># Download and extract the code cli program</span>
<span class="token instruction"><span class="token keyword">RUN</span> curl -sL <span class="token string">&quot;https://code.visualstudio.com/sha/download?build=stable&amp;os=cli-alpine-x64&quot;</span> <span class="token operator">\\</span>
      --output /tmp/vscode-cli.tar.gz &amp;&amp; <span class="token operator">\\</span>
      tar -xf /tmp/vscode-cli.tar.gz -C /usr/bin &amp;&amp; <span class="token operator">\\</span>
      rm /tmp/vscode-cli.tar.gz</span>

<span class="token comment"># Keep the container running</span>
<span class="token instruction"><span class="token keyword">CMD</span> [ <span class="token string">&quot;tail&quot;</span>, <span class="token string">&quot;-f&quot;</span>, <span class="token string">&quot;/dev/null&quot;</span> ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Build the image:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> vscode-remote-tunnel <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="step-2-enable-remote-tunnel-access-1" tabindex="-1"><a class="header-anchor" href="#step-2-enable-remote-tunnel-access-1"><span>Step 2 - Enable Remote Tunnel Access</span></a></h3><p>Start the container:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-v</span> <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>:/home/workspace <span class="token punctuation">\\</span>
    <span class="token parameter variable">-w</span> /home/workspace <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span> vscode-remote-tunnel <span class="token punctuation">\\</span>
    vscode-remote-tunnel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Log in to your Microsoft account:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> vscode-remote-tunnel code tunnel user login <span class="token parameter variable">--provider</span> microsoft
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Start the tunnel:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-d</span> vscode-remote-tunnel code tunnel --accept-server-license-terms <span class="token parameter variable">--name</span> <span class="token string">&quot;docker-tunnel&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="step-3-connect-to-docker-container" tabindex="-1"><a class="header-anchor" href="#step-3-connect-to-docker-container"><span>Step 3 - Connect to Docker Container</span></a></h3><p>Connect to the remote Docker container through a browser or VSCode Desktop, similar to connecting to a remote machine.</p><h2 id="terminate-the-tunnel" tabindex="-1"><a class="header-anchor" href="#terminate-the-tunnel"><span>Terminate the Tunnel</span></a></h2><p>Ensure to stop the server for the tunnel and log out from your Microsoft account when done. For the Docker container:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> vscode-remote-tunnel code tunnel <span class="token function">kill</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> vscode-remote-tunnel code tunnel user <span class="token builtin class-name">logout</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Follow a similar process for remote machines or WSL2 instances:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>code tunnel <span class="token function">kill</span>
code tunnel user <span class="token builtin class-name">logout</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="references" tabindex="-1"><a class="header-anchor" href="#references"><span>References</span></a></h2>`,20),E={href:"https://code.visualstudio.com/docs/remote/tunnels",target:"_blank",rel:"noopener noreferrer"};function M(W,q){const s=l("ExternalLinkIcon");return i(),c("div",null,[d,e("p",null,[n("Discover the flexibility of "),e("a",p,[n("VSCode Remote Tunnels"),a(s)]),n(", enabling work on remote machines, WSL2 instances, or Docker containers, not just through VSCode Desktop but also via web browsers.")]),u,m,e("p",null,[n("Ever faced the frustration of working on a machine seemingly light-years away? The hassle of installing a VPN client and navigating an RDP disrupts your workflow. With "),e("a",h,[n("VSCode Remote Tunnels"),a(s)]),n(", you can run VSCode Desktop on that distant machine without cluttering your own.")]),v,e("p",null,[n("Imagine being far from your laptop when an urgent task arises that demands your machine. Stress levels rising? No worries! Utilize "),e("a",b,[n("VSCode Remote Tunnels"),a(s)]),n(" to efficiently handle tasks from your tablet or smartphone.")]),k,g,f,w,e("p",null,[n("Ensure the code CLI is installed. If VSCode is absent on the remote machine or lacks a UI, perform a "),e("a",S,[n("standalone install"),a(s)]),n(".")]),_,e("ul",null,[e("li",null,[n("Open "),e("a",x,[n("vscode.dev"),a(s)]),n(" in your browser.")]),C,y,D]),R,e("p",null,[n("Refer to "),e("a",T,[n("Systemd support is now available in WSL"),a(s)]),n(" for details.")]),L,e("p",null,[e("a",I,[n("VSCode Remote Tunnels"),a(s)]),n(" also support containers with a slightly different setup.")]),V,e("ul",null,[e("li",null,[e("a",E,[n("Developing with Remote Tunnels"),a(s)])])])])}const B=o(r,[["render",M],["__file","development-with-tunnels.html.vue"]]),P=JSON.parse('{"path":"/articles/development-with-tunnels.html","title":"Development with VSCode Remote Tunnels","lang":"en-US","frontmatter":{"date":"2024-02-04T00:00:00.000Z","category":["devops"],"order":1,"tag":["vscode","devops","wsl","docker","remote"]},"headers":[{"level":2,"title":"Remote Machine 🌐","slug":"remote-machine-🌐","link":"#remote-machine-🌐","children":[{"level":3,"title":"Step 1 - Install code CLI","slug":"step-1-install-code-cli","link":"#step-1-install-code-cli","children":[]},{"level":3,"title":"Step 2 - Enable Remote Tunnel Access","slug":"step-2-enable-remote-tunnel-access","link":"#step-2-enable-remote-tunnel-access","children":[]},{"level":3,"title":"Step 3 - Connect to Remote Machine","slug":"step-3-connect-to-remote-machine","link":"#step-3-connect-to-remote-machine","children":[]}]},{"level":2,"title":"WSL2 Instance 🚧","slug":"wsl2-instance-🚧","link":"#wsl2-instance-🚧","children":[{"level":3,"title":"Step 1 - Enable systemd","slug":"step-1-enable-systemd","link":"#step-1-enable-systemd","children":[]},{"level":3,"title":"Step 2 - Install code CLI on WSL2","slug":"step-2-install-code-cli-on-wsl2","link":"#step-2-install-code-cli-on-wsl2","children":[]},{"level":3,"title":"Step 3 - Enable Remote Tunnel Access on WSL2","slug":"step-3-enable-remote-tunnel-access-on-wsl2","link":"#step-3-enable-remote-tunnel-access-on-wsl2","children":[]},{"level":3,"title":"Step 4 - Connect to WSL2 Instance","slug":"step-4-connect-to-wsl2-instance","link":"#step-4-connect-to-wsl2-instance","children":[]}]},{"level":2,"title":"Docker Container 🐋","slug":"docker-container-🐋","link":"#docker-container-🐋","children":[{"level":3,"title":"Step 1 - Build Docker Image","slug":"step-1-build-docker-image","link":"#step-1-build-docker-image","children":[]},{"level":3,"title":"Step 2 - Enable Remote Tunnel Access","slug":"step-2-enable-remote-tunnel-access-1","link":"#step-2-enable-remote-tunnel-access-1","children":[]},{"level":3,"title":"Step 3 - Connect to Docker Container","slug":"step-3-connect-to-docker-container","link":"#step-3-connect-to-docker-container","children":[]}]},{"level":2,"title":"Terminate the Tunnel","slug":"terminate-the-tunnel","link":"#terminate-the-tunnel","children":[]},{"level":2,"title":"References","slug":"references","link":"#references","children":[]}],"git":{"createdTime":1707217217000,"updatedTime":1707217217000,"contributors":[{"name":"Dorin Andrei Dragan","email":"dorin.andrei.dragan@gmail.com","commits":1}]},"readingTime":{"minutes":2.59,"words":777},"filePathRelative":"articles/development-with-tunnels.md","localizedDate":"February 4, 2024"}');export{B as comp,P as data};
