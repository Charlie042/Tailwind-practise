import { navLinks } from '../Constant';
import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
const Nav = () => {
  return (
    <header className="padding-x py-8  absolute z-10 w-full">
      <nav
        className="
      flex 
      justify-between 
      item-center
       max-contanier"
      >
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul
          className="flex-1
        flex
         justify-center 
         item-center
         gap-16
         max-lg:hidden
         "
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat
              leading-normal text-lg text-slate-grey"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'> 
          {/* add a logic for this later to diplay the navbar when i click on this */}
          <img
           src={hamburger} 
           alt="humbuger"
           width={25}
           height={25} />
        </div>
      </nav>
    </header>
  );
}

export default Nav