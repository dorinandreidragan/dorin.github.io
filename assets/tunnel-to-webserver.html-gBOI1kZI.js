import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as l,c as i,a as e,b as a,d as n,e as s}from"./app-sebRcgXN.js";const c={},d=e("h1",{id:"remote-tunnel-to-a-web-server",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#remote-tunnel-to-a-web-server"},[e("span",null,"Remote Tunnel to a Web Server")])],-1),u={href:"https://aka.ms/devtunnels",target:"_blank",rel:"noopener noreferrer"},p=s(`<p>Imagine this scenario: you are working on a web application that is running on your local machine, and you want to show it to a friend or a colleague. You can use this feature to share your local web server with them.</p><p>In order to do that, you first need to have a Microsoft or a GitHub account. In this document, I am using a Microsoft account.</p><p>Let&#39;s get started!</p><h2 id="step-1-install-devtunnel-cli" tabindex="-1"><a class="header-anchor" href="#step-1-install-devtunnel-cli"><span>Step 1 - Install devtunnel CLI</span></a></h2><p>Run the following command to install the <code>devtunnel</code> CLI:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-sL</span> https://aka.ms/DevTunnelCliInstall <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),h={href:"https://learn.microsoft.com/en-us/azure/developer/dev-tunnels/get-started?tabs=linux#install",target:"_blank",rel:"noopener noreferrer"},v=s(`<h2 id="step-2-start-a-web-server-on-your-local-machine" tabindex="-1"><a class="header-anchor" href="#step-2-start-a-web-server-on-your-local-machine"><span>Step 2 - Start a web server on your local machine</span></a></h2><p>In this example, I am using a simple web server that serves a static HTML page. You can use any web server you want.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Create a simple HTML page that says &quot;Hello World&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello World&quot;</span> <span class="token operator">&gt;</span> index.html

<span class="token comment"># Start a simple web server that serves the index.html file</span>
python3 <span class="token parameter variable">-m</span> http.server <span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="step-3-create-a-devtunnel-to-the-web-server" tabindex="-1"><a class="header-anchor" href="#step-3-create-a-devtunnel-to-the-web-server"><span>Step 3 - Create a devtunnel to the web server</span></a></h2><ul><li><p>Login to your Microsoft account using device code authentication:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>devtunnel user login <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Create a temporary devtunnel to the web server on port 8080, and allow anonymous access:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>devtunnel <span class="token function">host</span> <span class="token parameter variable">-p</span> <span class="token number">8080</span> --allow-anonymous
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="step-4-access-the-web-server-from-the-browser" tabindex="-1"><a class="header-anchor" href="#step-4-access-the-web-server-from-the-browser"><span>Step 4 - Access the web server from the browser</span></a></h2><ul><li>Open your browser and navigate to the URL that was printed in the previous step.</li><li>You should see the &quot;Hello World&quot; page.</li></ul>`,7);function m(b,g){const t=o("ExternalLinkIcon");return l(),i("div",null,[d,e("p",null,[a("This document describes how to use "),e("a",u,[a("Microsoft Dev tunnels"),n(t)]),a(" to connect to a web server running on a remote machine.")]),p,e("p",null,[a("See "),e("a",h,[a("Install the DevTunnel CLI"),n(t)]),a(" for more information.")]),v])}const k=r(c,[["render",m],["__file","tunnel-to-webserver.html.vue"]]),_=JSON.parse('{"path":"/articles/tunnel-to-webserver.html","title":"Remote Tunnel to a Web Server","lang":"en-US","frontmatter":{"date":"2024-02-04T00:00:00.000Z","category":["devops"],"order":2,"tag":["vscode","devops","wsl","docker","remote"]},"headers":[{"level":2,"title":"Step 1 - Install devtunnel CLI","slug":"step-1-install-devtunnel-cli","link":"#step-1-install-devtunnel-cli","children":[]},{"level":2,"title":"Step 2 - Start a web server on your local machine","slug":"step-2-start-a-web-server-on-your-local-machine","link":"#step-2-start-a-web-server-on-your-local-machine","children":[]},{"level":2,"title":"Step 3 - Create a devtunnel to the web server","slug":"step-3-create-a-devtunnel-to-the-web-server","link":"#step-3-create-a-devtunnel-to-the-web-server","children":[]},{"level":2,"title":"Step 4 - Access the web server from the browser","slug":"step-4-access-the-web-server-from-the-browser","link":"#step-4-access-the-web-server-from-the-browser","children":[]}],"git":{"createdTime":1707217217000,"updatedTime":1707217217000,"contributors":[{"name":"Dorin Andrei Dragan","email":"dorin.andrei.dragan@gmail.com","commits":1}]},"readingTime":{"minutes":0.99,"words":297},"filePathRelative":"articles/tunnel-to-webserver.md","localizedDate":"February 4, 2024"}');export{k as comp,_ as data};
