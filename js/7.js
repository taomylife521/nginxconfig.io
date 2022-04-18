"use strict";(self["webpackChunknginxconfig_io"]=self["webpackChunknginxconfig_io"]||[]).push([[7],{6007:(e,o,a)=>{a.r(o),a.d(o,{default:()=>V});const r={back:"Voltar",next:"Próximo",enable:"habilitar",php:"PHP",ssl:"SSL",nginx:"NGINX",http:"HTTP",https:"HTTPS",letsEncrypt:"Let's Encrypt",python:"Python",wordPress:"WordPress",drupal:"Drupal",magento:"Magento",joomla:"Joomla",django:"Django",logging:"Logs",reverseProxy:"Proxy reverso",reverseProxyLower:"proxy reverso",restrict:"Restringir",path:"Caminho"};var n=a(8487);const i={title:`${r.nginx}Configuração`,description:`A maneira mais fácil de configurar um servidor ${r.nginx} de alto desempenho, seguro e estável.`,singleColumnMode:"Modo de coluna única",splitColumnMode:"Modo com divisão de colunas",perWebsiteConfig:"Configuração por site",addSite:"Adicionar site",globalConfig:"Configuração global",setup:"Configurar",configFiles:"Arquivos de configuração"},t={downloadConfig:"Baixar a configuração",copyBase64:"Cópia Base64"},s={backToTop:"Voltar ao topo",thisToolIs:"Esta ferramenta é",openSourceOnGitHub:"de código aberto no GitHub",underThe:"sob a",mit:"licença MIT",license:"!",weWelcomeFeedbackAndContributions:"Agradecemos comentários e contribuições.",originallyCreatedBy:"Originalmente criado por",balintSzekeres:"Bálint Szekeres",maintainedBy:"mantido por",digitalOcean:"DigitalOcean"},d={enableEncryptedSslConnection:`${r.enable} conexões ${r.ssl} criptografadas`,http2:`${r.http}/2`,enableHttp2Connections:`${r.enable} conexões ${r.http}/2`,http3:`${r.http}/3`,enableHttp3Connections:`${r.enable} conexões ${r.http}/3`,forceHttps:`Forçar ${r.https}`,hsts:"HSTS",enableStrictTransportSecurity:`${r.enable} Strict Transport Security, requerendo conexões HTTPS`,enableIncludeSubDomains:`${r.enable} a diretiva includeSubDomains, requerendo conexões HTTPS para TODOS os subdomínios`,enablePreload:`${r.enable} a diretiva preload, dizendo aos navegadores para sempre fazer conexões HTTPS apenas`,certificationType:"Tipo de certificação",customCertificate:"Certificado personalizado",letsEncryptEmail:`E-mail do ${r.letsEncrypt}`,http3IsANonStandardModule:"HTTP/3 isn't a standard NGINX module, check the ",http3NginxQuicReadme:"NGINX QUIC readme",http3OrThe:" or the ",http3CloudflareQuicheProject:"Cloudflare quiche project",http3ForBuildingNginxWithHttp3:" for how to build NGINX with HTTP/3!"},l={byDomain:"por domínio",enableForThisDomain:`${r.enable} para este domínio`},c={phpIsDisabled:`O ${r.php} está desabilitado.`,phpCannotBeEnabledWithReverseProxy:`O ${r.php} não pode ser habilitado enquanto o proxy reverso estiver habilitado.`,phpCannotBeEnabledWithPython:`O ${r.php} não pode ser habilitado enquanto o ${r.python} estiver habilitado.`,enablePhp:`${r.enable} ${r.php}`,wordPressRules:`Regras do ${r.wordPress}`,enableWordPressRules:`${r.enable} regras específicas do ${r.wordPress}`,drupalRules:`Regras do ${r.drupal}`,enableDrupalRules:`${r.enable} regras específicas do ${r.drupal}`,magentoRules:`Regras do ${r.magento}`,enableMagentoRules:`${r.enable} regras específicas do ${r.magento}`,joomlaRules:`Regras do ${r.joomla}`,enableJoomlaRules:`${r.enable} regras específicas do ${r.joomla}`,phpServer:`Servidor ${r.php}`,phpBackupServer:`Servidor de backup ${r.php}`,tcp:"TCP",hhvmSocket:"Socket HHVM",php5Socket:"Socket 5.x",php70Socket:"Socket 7.0",php71Socket:"Socket 7.1",php72Socket:"Socket 7.2",php73Socket:"Socket 7.3",php74Socket:"Socket 7.4",php80Socket:"Socket 8.0",phpSocket:"Socket PHP",custom:"Custom",disabled:"Desabilitado"},p={presets:"Predefinições",itLooksLikeYouCustomisedTheConfig:"Parece que você personalizou a configuração para este domínio. A escolha de uma nova predefinição pode redefinir ou alterar algumas das configurações que você personalizou.",frontend:"Frontend",nodeJs:"Node.js",singlePageApplication:"Aplicação de página única"},u={pythonIsDisabled:`O ${r.python} está desabilitado.`,pythonCannotBeEnabledWithReverseProxy:`O ${r.python} não pode ser habilitado enquanto o proxy reverso estiver habilitado.`,pythonCannotBeEnabledWithPhp:`O ${r.python} não pode ser habilitado enquanto o ${r.php} estiver habilitado.`,enablePython:`${r.enable} ${r.python}`,djangoRules:`Regras do ${r.django}`,enableDjangoRules:`${r.enable} regras específicas do ${r.django}`},g={reverseProxyIsDisabled:`O ${r.reverseProxy} está desabilitado.`,reverseProxyCannotBeEnabledWithPhp:`O ${r.reverseProxy} não pode ser habilitado enquanto o ${r.php} estiver habilitado.`,reverseProxyCannotBeEnabledWithPython:`O ${r.reverseProxy} não pode ser habilitado enquanto o ${r.python} estiver habilitado.`,enableReverseProxy:`${r.enable} ${r.reverseProxyLower}`},m={fallbackRouting:"Roteamento alternativo",fallbackRoutingPhpPath:`Caminho para roteamento alternativo ${r.php}`,legacyPhpRouting:`Roteamento ${r.php} legado`,enableLegacyRouting:`${r.enable} roteamento legado`,routing:"Roteamento"},b={domain:"Domínio",documentRoot:"Raiz dos documentos",oneOrMoreOtherDomainsAreAlsoNamed:"Um ou mais outros domínios também são nomeados",thisWillCauseIssuesWithConfigGeneration:"Isso causará problemas com a geração da configuração.",wwwSubdomain:"Subdomínio www",cdnSubdomain:"Subdomínio CDN",redirectSubdomains:"Redirecionar subdomínios",server:"Servidor",listen:"escutar"},h={disableForThisDomain:"desabilitar para este domínio",responseCode:"Código de resposta"},f="Onion",v={onion:f,onionLocation:`${f} location`,provideAnOnionLocationToSetOnionLocationHeader:"Provide an onion location address to set the Onion-Location header for your site.",letsVisitorsKnownOnionServicesIsAvailable:"This lets visitors know that an onion services version of your site is available for Tor browsers.",learnMoreAboutOnionServices:"Learn more about Onion services",onionLocationExpectedToEndWithOnion:"Onion location addresses normally end with `.onion`."},$={https:d,logging:l,php:c,presets:p,python:u,reverseProxy:g,routing:m,server:b,restrict:h,onion:v},C="Mozilla",y="IPv4",S="IPv6",x={sslProfile:`Perfil ${r.ssl}`,httpsMustBeEnabledOnOneSite:`O ${r.https} deve estar habilitado em pelo menos um site para definir as configurações globais de ${r.https}.`,portReuse:"Reuseport",enableReuseOfPort:`${r.enable} reuseport to generate a listening socket per worker`,ocspDnsResolvers:"Resolvedores de DNS OCSP",cloudflareResolver:"Resolvedor Cloudflare",googlePublicDns:"DNS público do Google",openDns:"OpenDNS",quad9:"Quad9",verisign:"Verisign",letsEncryptWebroot:`Diretório raiz do ${r.letsEncrypt}`,letsEncryptCertRoot:`Diretório de certificado do ${r.letsEncrypt}`,mozillaModern:`${C} Modern`,mozillaIntermediate:`${C} Intermediate`,mozillaOld:`${C} Old`,ipv4Only:`${y} apenas`,ipv6Only:`${S} apenas`,ipv4AndIpv6:`${y} & ${S}`},P={enableFileNotFoundErrorLogging:`${r.enable} erro de arquivo não encontrado ao fazer login`,logformat:"log_format",enableCloudflare:"adicionar cabeçalhos de solicitação Cloudflare ao formato de log padrão",cfRay:"CF-Ray",cfConnectingIp:"CF-Connecting-IP",xForwardedFor:"X-Forwarded-For",xForwardedProto:"X-Forwarded-Proto",trueClientIp:"True-Client-IP",cfIpCountry:"CF-IPCountry",cfVisitor:"CF-Visitor",cdnLoop:"CDN-Loop"},T={nginxConfigDirectory:`Diretório de configuração do ${r.nginx}`,mb:"MB"},k={gzipCompression:"Compressão Gzip",enableGzipCompression:`${r.enable} compressão gzip`,brotliCompression:"Compressão Brotli",enableBrotliCompression:`${r.enable} compressão brotli`,brotliIsANonStandardModule:"Brotli isn't a standard NGINX module, check the ",brotliGoogleNgxBrotliProject:"Google ngx_brotli project",brotliForBuildingNginxWithBrotli:" for how to build NGINX with Brotli!",expirationForAssets:"Expiração de ativos",expirationForMedia:"Expiração de mídia",expirationForSvgs:"Expiração de SVGs",expirationForFonts:"Expiração de fontes",performance:"Desempenho"},O={pythonServer:`Servidor ${r.python}`,pythonMustBeEnabledOnOneSite:`O ${r.python} deve estar habilitado em pelo menos um site para definir as configurações globais do ${r.python}.`},D="Legacy X-Forwarded-* headers",R={reverseProxyMustBeEnabledOnOneSite:`O ${r.reverseProxy} deve estar habilitado em pelo menos um site para definir as configurações globais do ${r.reverseProxyLower}.`,seconds:"segundos",passOn:`${D} passed on`,remove:`${D} actively removed`},w={whenUsingWordPressUnsafeEvalIsOftenRequiredToAllowFunctionality:`Ao utilizar o ${r.wordPress}, <code class="slim">script-src 'self' 'unsafe-inline' 'unsafe-eval';</code> é frequentemente exigido na Política de Segurança de Conteúdo para permitir que o painel de administração funcione corretamente.`,security:"Segurança"},N={modularizedStructure:"Estrutura modularizada",enableModularizedConfigFiles:`${r.enable} arquivos de configuração modularizada`,symlinkVhost:"Symlink para vhost",enableSymLinksFrom:`${r.enable} symlinks de`,to:"para",shareConfiguration:"Compartilhar configuração",resetConfiguration:"Redefinir configuração",resetGlobalConfig:"Redefinir configuração global",resetAllDomains:"Redefinir todos os domínios",removeAllDomains:"Remover todos os domínios",resetAllDomainsConfig:"Redefinir todas as configurações de domínios",resetDomainConfig:"Redefinir configuração de domínio",removeDomain:"Remover domínio",yesImSure:"Sim, tenho certeza",noCancel:"Não, cancelar",tools:"Ferramentas",resetGlobalConfigBody:"Tem certeza de que deseja redefinir todas as opções de configuração na seção de configuração global?",resetAllDomainsConfigBody:"Tem certeza de que deseja redefinir a configuração de TODOS os domínios?",removeAllDomainsBody:"Tem certeza de que deseja remover TODAS as configurações de domínio?",areYouSureYouWantToResetAllConfigurationOptionsForThe:"Tem certeza de que deseja redefinir todas as opções de configuração para o",domain:"domínio?",areYouSureYouWantToRemoveThe:"Tem certeza de que deseja remover a ",domainConfiguration:"configuração do domínio?"},I="Docker",E="Dockerfile",A={docker:I,dockerfile:E,dockerCompose:`${I} Compose`,applyDockerTweaks:`Aplicar ajustes do ${I}`,applyDockerTweaksForNginx:`Aplicar ajustes de configuração para executar o ${r.nginx} com ${I}`,applyDockerTweaksExplainer:`Atualiza o usuário ${r.nginx} para ser <code class="slim">nginx</code> e o pid para <code class="slim">/var/run/nginx.pid</code>`,includeDockerfile:`Incluir o ${E} para executar o ${r.nginx} com ${I}`,includeDockerCompose:`Incluir o docker-compose para executar o ${r.nginx} com docker-compose`},F={https:x,logging:P,nginx:T,performance:k,python:O,reverseProxy:R,security:w,tools:N,docker:A},B="Certbot",z={commentOutSslDirectivesInConfiguration:`Comente as diretivas relacionadas ao ${r.ssl} na configuração:`,reloadYourNginxServer:`Recarregue seu servidor ${r.nginx}:`,obtainSslCertificatesFromLetsEncrypt:`Obtenha certificados ${r.ssl} de ${r.letsEncrypt} usando o ${B}:`,uncommentSslDirectivesInConfiguration:`Descomente as diretivas relacionadas ao ${r.ssl} na configuração:`,configureCertbotToReloadNginxOnCertificateRenewal:`Configure o ${B} para recarregar o ${r.nginx} quando ele renovar certificados com sucesso:`,certbotDoesNotNeedToBeSetupForYourConfiguration:`O ${B} não precisa ser definido para sua configuração ${r.nginx}.`,certbot:B},L={downloadTheGeneratedConfig:"<b>Baixe</b> a configuração gerada:",andUploadItToYourServers:"e <b>carregue-a</b> para o",directory:"diretórioi do seu servidor.",or:"ou, ",copyBase64StringOfCompressedConfig:"Copie uma string base64 da configuração compactado",pasteItInYourServersCommandLineAndExecute:", cole-a na linha de comando do seu servidor e execute-a.",navigateToYourNginxConfigurationDirectoryOnYourServer:`Navegue até o <b>diretório de configuração</b> do ${r.nginx} em seu servidor:`,createABackupOfYourCurrentNginxConfiguration:`Crie um <b>backup</b> da sua configuração atual do ${r.nginx}:`,extractTheNewCompressedConfigurationArchiveUsingTar:"<b>Extraia</b> o novo arquivo de configuração compactado usando tar:",download:"Baixar"},q={letsGoLive:"Vamos colocar no ar!",reloadNginxToLoadInYourNewConfiguration:`Recarregue o ${r.nginx} para carregar a sua nova configuração:`,goLive:"Está no ar!"},G={generateDiffieHellmanKeysByRunningThisCommandOnYourServer:"Gere <b>chaves Diffie-Hellman</b> executando este comando em seu servidor:",createACommonAcmeChallengeDirectoryForLetsEncrypt:`Crie um diretório comum <b>ACME-challenge</b> (para o <b>${r.letsEncrypt}</b>):`,noAdditionalStepsAreNeededToSetUpSslForNginx:`Nenhuma etapa adicional é necessária para configurar o ${r.ssl} para a sua configuração ${r.nginx}.`,sslInit:`${r.ssl} init`},H={certbot:z,download:L,goLive:q,ssl:G},M={lookingForAPlaceToDeploy:"👋 Looking for a place to deploy your new configuration?",tryOutDigitalOceansDroplet:"Try out DigitalOcean's LEMP Droplet with NGINX"},j={wantToContributeChanges:"👋 Want to request new features, contribute changes, or translate the tool into a new language?",getInvolvedOnGitHub:"Get involved on GitHub"},W={droplet:M,contribute:j},Y={app:i,setup:t,footer:s,domainSections:$,globalSections:F,setupSections:H,callouts:W},V={common:r,languages:n["default"],templates:Y}}}]);