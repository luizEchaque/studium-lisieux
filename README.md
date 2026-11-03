# Studium Lisieux

## Front-end independente

React, Vite e GSAP na pasta studium-front.

No PowerShell, a partir da raiz:

~~~powershell
cd studium-front
powershell -ExecutionPolicy Bypass -File .\start.ps1
~~~

Abra http://localhost:5173. O script localiza o Node instalado ou o runtime do Codex disponível neste computador. Em outro computador, instale Node.js com npm e execute npm install nesta pasta.

Com Node e npm no PATH, também é possível usar npm run dev.

Para compilar, execute npm run build em studium-front. O resultado fica exclusivamente em studium-front/dist. Essa é a pasta para enviar ao Netlify Drop.

A landing page atual funciona com o back-end desligado. O proxy de desenvolvimento encaminha futuras chamadas /api para http://localhost:5180.

## Back-end independente

ASP.NET Core / C# com .NET 10 na pasta studium-back.

A partir da raiz, em outro terminal:

~~~powershell
cd studium-back
dotnet run
~~~

Verifique http://localhost:5180/api/health. A resposta é {"status":"ok"}.

Para publicar apenas o back-end, execute dotnet publish -c Release nesta pasta. A publicação não depende da compilação do React.

## Estrutura

- studium-front/src contém a landing page, estilos e componentes.
- studium-front/public/assets contém os SVGs.
- studium-back/Program.cs contém a configuração da API.
- studium-back/StudiumLisieux.csproj é o projeto C#.

As duas aplicações podem ser executadas, compiladas e hospedadas separadamente. A comunicação futura em produção será configurada quando os endpoints de negócio forem implementados.

## GitHub Pages

O workflow .github/workflows/pages.yml instala e compila studium-front e publica seu diretório dist. Ele é executado em pushes para main ou master e também pode ser iniciado pela aba Actions.

No repositório do GitHub, selecione Settings > Pages > Source > GitHub Actions antes da primeira execução. O workflow calcula o prefixo do endereço usando a configuração do Pages, incluindo sites publicados sob o nome do repositório.

Os SVGs e o favicon usam a base do Vite para carregar nesse endereço. O back-end C# é hospedado separadamente.
