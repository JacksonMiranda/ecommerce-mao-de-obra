# ADR-0001: Arquitetura e Tecnologias do Sistema / System Architecture and Technologies

**Status**: Aceito / Accepted  
**Data**: 2024-12-26  
**Decisor**: Jackson J. Miranda

[English version below](#english)

## 🇧🇷 Contexto

Precisamos estabelecer a arquitetura técnica para um e-commerce de contratação de mão de obra que seja:
- Simples de desenvolver e manter
- Rápido de carregar
- Seguro para transações
- Acessível para diferentes usuários

## Decisão

Optamos por uma **arquitetura de aplicação web estática** com as seguintes tecnologias principais:

### Frontend
- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização responsiva sem frameworks externos
- **JavaScript (ES6+)**: Funcionalidades interativas nativas

### Integração de Pagamento
- **PayPal SDK**: Solução confiável e amplamente aceita no Brasil
- **HTTPS**: Protocolo seguro para transações

### Hospedagem
- **Arquivos estáticos**: Compatível com qualquer servidor web
- **CDN-ready**: Facilita distribuição global

## Justificativa

### Vantagens da Arquitetura Escolhida

1. **Simplicidade**
   - Sem dependências complexas de build
   - Fácil manutenção e debugging
   - Deploy direto sem compilação

2. **Performance**
   - Carregamento rápido
   - Menos requests HTTP
   - Cache eficiente pelo navegador

3. **Compatibilidade**
   - Funciona em qualquer navegador moderno
   - Não requer JavaScript frameworks
   - Acessível mesmo com conexões lentas

4. **Segurança**
   - Menos vetores de ataque
   - PayPal gerencia dados sensíveis
   - Validação no frontend + validação PayPal

5. **Custo**
   - Hospedagem econômica
   - Sem licenças de frameworks
   - Manutenção simplificada

### Alternativas Consideradas

#### SPA com React/Vue
- **Rejeitada**: Complexidade desnecessária para o escopo
- **Motivo**: Overhead de framework para funcionalidades simples

#### Backend com Node.js/PHP
- **Rejeitada**: Aumentaria custos de hospedagem
- **Motivo**: PayPal SDK resolve necessidades de pagamento

#### Framework CSS (Bootstrap/Tailwind)
- **Rejeitada**: CSS customizado oferece controle total
- **Motivo**: Design específico sem código desnecessário

## Consequências

### Positivas
- ✅ Desenvolvimento rápido
- ✅ Deploy simples
- ✅ Manutenção facilitada
- ✅ Performance otimizada
- ✅ Custos reduzidos

### Negativas
- ❌ Funcionalidades avançadas requerem mais código manual
- ❌ Sem roteamento SPA nativo
- ❌ Gerenciamento de estado manual

### Mitigações
- Estrutura de código organizada em módulos
- Comentários detalhados no código
- Testes manuais sistemáticos

---

## 🇺🇸 English

## Context

We need to establish the technical architecture for a labor hiring e-commerce that is:
- Simple to develop and maintain
- Fast to load
- Secure for transactions
- Accessible to different users

## Decision

We opted for a **static web application architecture** with the following main technologies:

### Frontend
- **HTML5**: Semantic and accessible structure
- **CSS3**: Responsive styling without external frameworks
- **JavaScript (ES6+)**: Native interactive features

### Payment Integration
- **PayPal SDK**: Reliable and widely accepted solution in Brazil
- **HTTPS**: Secure protocol for transactions

### Hosting
- **Static files**: Compatible with any web server
- **CDN-ready**: Facilitates global distribution

## Rationale

### Advantages of Chosen Architecture

1. **Simplicity**
   - No complex build dependencies
   - Easy maintenance and debugging
   - Direct deployment without compilation

2. **Performance**
   - Fast loading
   - Fewer HTTP requests
   - Efficient browser caching

3. **Compatibility**
   - Works on any modern browser
   - No JavaScript frameworks required
   - Accessible even with slow connections

4. **Security**
   - Fewer attack vectors
   - PayPal manages sensitive data
   - Frontend validation + PayPal validation

5. **Cost**
   - Economical hosting
   - No framework licenses
   - Simplified maintenance

### Alternatives Considered

#### SPA with React/Vue
- **Rejected**: Unnecessary complexity for the scope
- **Reason**: Framework overhead for simple functionality

#### Backend with Node.js/PHP
- **Rejected**: Would increase hosting costs
- **Reason**: PayPal SDK solves payment needs

#### CSS Framework (Bootstrap/Tailwind)
- **Rejected**: Custom CSS offers full control
- **Reason**: Specific design without unnecessary code

## Consequences

### Positive
- ✅ Rapid development
- ✅ Simple deployment
- ✅ Facilitated maintenance
- ✅ Optimized performance
- ✅ Reduced costs

### Negative
- ❌ Advanced features require more manual code
- ❌ No native SPA routing
- ❌ Manual state management

### Mitigations
- Organized code structure in modules
- Detailed code comments
- Systematic manual testing