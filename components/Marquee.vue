



<template>
   <section class="mt-10 md:mt-16  cursor-pointer">
    <a href="#contact" class="marquee  bg-yellow-300">
        <article class="marquee__items italic ">
         <div>😎 Let &apos;s get to work!</div>
         <div>😎 Have a project in mind?</div>
         <div>😎 Let &apos;s get to work!</div>
         <div>😎 Have a project in mind?</div>
         <div>😎 Let &apos;s get to work!</div>
         <div>😎 Have a project in mind?</div>   
        </article>
        <article class="marquee__items italic" aria-hidden="true">
         <div>😎 Let &apos;s get to work!</div>
         <div>😎 Have a project in mind?</div>
          <div>😎 Let &apos;s get to work!</div>
         <div>😎 Have a project in mind?</div>
         <div>😎 Let &apos;s get to work!</div>
         <div>😎 Have a project in mind?</div>
        </article>
    </a>

   </section>
</template>

<style >
.marquee {
  display: flex;
  overflow: hidden;
  padding: .3rem 1rem;
  text-decoration: none;
  color: black;
  border-bottom: 2px solid black; 
  border-top: 2px solid black;
  }

.marquee__items {
  display: flex;
  justify-content: space-around;
  flex-shrink: 0;    
  min-width: 100%;
  font-size: 1.7rem;
  font-weight: 400;
  animation: marqueeAnimation 50s linear infinite;
  }

.marquee:hover .marquee__items {
  animation-play-state: paused;
  }

  @keyframes marqueeAnimation {
  from {
      translate: 0 0;
  }
  to {
      translate: calc(-100% - 1rem) 0;
  }
  }

</style>


