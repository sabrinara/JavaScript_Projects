//sale
const saleSection = document.createElement('div');
saleSection.textContent = 'SALE ALERT: 30% OFF SITEWIDE | Code:MEMORIAL30 - 20% Off Fine | Code:FINE20';
saleSection.style.textAlign = 'center';
saleSection.style.fontSize = '12px';
saleSection.style.display = 'flex';
saleSection.style.justifyContent = 'center';
saleSection.style.alignItems = 'center';
saleSection.style.padding = '12px';
saleSection.style.backgroundColor = 'black';
saleSection.style.color = 'white';

document.body.appendChild(saleSection);

//navbar
const navbar = document.createElement('div');
navbar.style.display = 'flex';
navbar.style.justifyContent = 'space-between';
navbar.style.alignItems = 'center';
navbar.style.backgroundColor = '#fff';
navbar.style.padding = ' 20px 10px';


const svgContainer = document.createElement('div');
svgContainer.innerHTML = `
  <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icon icon-hamburger" focusable="false">
    <path d="M0 10L13 10" stroke="currentColor"></path>
    <path d="M0 1L13 1" stroke="currentColor"></path>
    <path d="M0 5.5L13 5.5" stroke="currentColor"></path>
  </svg>
`;


const navtext = document.createElement('div');
navtext.textContent = 'JAMES MICHELLE';
navtext.style.fontSize = '16px';
navtext.style.fontFamily = 'Jmui, sans-serif';
navtext.style.fontWeight = 'bold';
navtext.style.letterSpacing = '6px';
navtext.style.textTransform = 'uppercase';
navtext.style.fontWeight = '100';
navtext.style.color = 'gray';

const svgContainer2 = document.createElement('div');
svgContainer2.innerHTML = `<svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg" id="cart-icon-">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M1.64488 10.9296C1.91406 10.928 2.60331 11.0819 2.71834 11.0257C3.27676 10.7529 3.30038 10.9001 3.70632 10.7326C4.36798 10.4605 4.48758 10.67 4.70595 10.4628C4.7281 10.4414 4.87561 10.2791 4.89303 10.2549C5.13135 9.93103 5.17048 8.58931 5.26675 7.91002C5.34427 7.36558 5.42888 7.09161 5.53505 6.62083C5.62128 6.23912 5.63959 6.3249 5.63088 5.99244C5.6201 5.59514 5.95513 4.75721 6.04755 4.2173C6.15342 3.59753 6.73045 2.71203 7.06683 2.30093C7.37308 1.9262 8.26522 1.6083 8.70525 1.31751C8.96321 1.14717 9.28658 0.966581 9.6024 0.905218C10.082 0.81246 10.1666 0.968834 10.6924 0.74761C10.8946 0.662443 11.5804 0.791116 11.8171 0.843651C12.4092 0.975607 12.1592 1.18944 12.4659 1.54385L12.4963 1.13855C12.868 1.27994 13.0327 1.57403 13.2689 1.81679C14.2973 2.87303 14.0277 3.23406 14.2694 3.74934C14.3948 4.01695 14.3927 3.82465 14.4977 4.29256C14.7852 5.57129 14.9002 8.11825 14.7111 9.53389C14.6281 10.1582 14.8161 9.99728 14.9732 10.6905C15.5035 10.8434 18.9396 10.9877 19.4952 10.9089C19.5597 11.2779 19.3665 12.9603 19.3377 13.5706C19.2894 14.5969 19.2723 15.4863 19.3143 16.5138C19.3852 18.2333 19.3269 17.7671 18.9898 18.9368C18.5123 20.5926 17.5602 20.9466 16.4138 21.2817C13.9957 21.9882 14.7866 21.7486 12.503 21.6981L10.9725 21.6644C10.7162 21.6431 10.7095 21.5417 10.5917 21.5983C9.92959 21.5544 9.2191 21.3517 8.58371 21.3135C7.93329 21.2747 6.87783 21.4594 6.47559 21.4537C5.24429 21.4352 5.99598 21.7207 4.62587 21.0802C3.85244 20.7194 3.57367 20.3529 3.16822 20.1119C2.93108 19.9711 2.9711 20.0471 2.81399 19.8078C2.47069 19.2855 1.78896 18.229 1.66728 17.6082C1.28898 15.6767 1.69017 16.6458 1.53055 15.7933C1.49556 15.6073 1.4709 15.3791 1.45554 15.1805C1.41508 14.6592 1.44432 14.193 1.47178 13.7165C1.52641 12.776 1.62047 11.8609 1.64469 10.9296L1.64488 10.9296ZM15.4155 9.9421C15.2822 9.22115 15.5122 8.27718 15.5331 7.93548C15.5806 7.15894 15.3485 4.89206 15.1235 4.09461C15.0347 3.7796 15.013 3.57684 14.8893 3.28954C14.7463 2.95709 14.7455 2.89983 14.6414 2.57537C14.4668 2.03277 14.2329 1.61516 13.8885 1.35574C13.4909 1.05632 13.0114 0.301125 12.3159 0.237504C11.9692 0.205694 11.928 0.181889 11.6383 0.100211C10.9533 -0.0920826 10.0987 0.0312568 9.39475 0.147206C8.81134 0.242838 8.38258 0.653277 8.19297 0.747275C7.88673 0.898521 8.05757 0.573454 7.33494 1.08076C7.20781 1.17044 7.21785 1.21867 7.10282 1.28577C6.83365 1.44277 6.79732 1.27756 6.55442 1.58991C6.35065 1.8528 5.72149 3.0946 5.51771 3.4726C5.39515 3.69957 5.36606 4.01067 5.28101 4.27519C4.96015 5.27832 5.04343 5.59454 4.93431 5.99471C4.47009 7.69394 4.7964 7.49241 4.56177 8.25912C4.48883 8.4978 4.5476 8.50703 4.53017 8.73236C4.51231 8.96857 4.3902 9.28893 4.34634 9.56348C3.55299 9.66363 1.64952 9.76563 0.958188 9.5682C0.928952 9.66897 0.909906 9.80338 0.860735 9.91154C0.78233 10.0825 0.822787 9.91031 0.732422 10.128C0.739509 10.7975 0.796947 11.415 0.766235 12.1226C0.732127 12.9079 0.727551 13.208 0.789122 13.9827C0.843313 14.6632 0.75206 15.247 0.836225 15.9095C0.922901 16.5923 1.38667 19.2691 1.69248 19.7024C1.81046 19.8698 1.93242 19.9248 2.07124 20.1731C2.78842 21.457 2.58078 20.9595 3.23669 21.5485C3.8297 22.0813 5.18311 22.5968 5.94694 22.7675C6.2266 22.8307 7.60659 22.8155 7.95375 22.6899C8.25217 22.5822 9.62392 22.7571 9.93222 22.8272C10.3585 22.9239 10.8539 22.8644 11.3098 22.8753C11.8132 22.8874 12.175 22.7287 12.5999 22.7014C12.9791 22.6776 13.6538 22.6998 14.038 22.7316C14.2388 22.9643 14.5109 22.9916 14.803 22.9992C15.618 23.0212 16.356 22.5758 17.1478 22.2955C17.802 22.0632 17.8695 22.102 18.5375 21.5686C18.6342 21.491 19.0063 21.1337 19.0935 21.0115L19.4756 20.2092C19.6782 19.5299 19.7573 18.846 19.8539 18.005C19.8914 17.6824 20.0142 17.1703 20.0135 16.9132C20.0123 16.5159 19.968 16.0792 19.986 15.6519C20.0528 14.0366 20.1998 12.1806 20.1631 10.593C19.8276 10.08 19.9177 10.2202 19.3192 10.2276C19.1688 9.80993 18.9558 9.7775 18.538 9.82327L15.4156 9.94148L15.4155 9.9421Z" fill="#454845"></path>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M7.07692 9.82751C6.97267 9.00333 7.45271 6.12907 7.84577 5.24761C7.92625 5.06702 7.96242 4.97016 8.05501 4.80639C8.33748 4.30422 8.30706 4.15074 8.4984 3.95862C8.68047 3.77679 8.58301 3.84226 8.72639 3.61118C8.9777 3.2069 9.10469 3.34829 9.39144 3.21264C9.66269 3.08459 9.89525 3.00599 10.1406 2.84838C10.7465 2.45969 11.2928 3.04477 11.7887 3.2149C12.0416 3.30171 12.1857 3.66023 12.3241 3.93071C12.459 4.19482 12.6266 4.48318 12.747 4.73929C12.9846 5.24311 13.1632 6.30593 13.1266 7.05809C13.09 7.8133 13.0486 9.01895 12.9128 9.61492L8.43838 9.95148C8.17082 9.68223 7.47239 9.86344 7.07696 9.82752L7.07692 9.82751ZM7.39113 10.6463C7.73532 10.687 7.74152 10.7639 8.10197 10.7344C8.47111 10.7048 9.41908 10.6648 9.74288 10.7808C10.2762 10.9718 10.2662 10.6823 10.3062 10.6574L10.8812 10.7448C11.0744 10.7535 11.0346 10.6689 11.2603 10.6724C12.0624 10.6835 11.9245 10.5955 12.4088 10.5589C12.6622 10.5398 13.3627 10.6574 13.5352 10.359C13.593 10.2589 13.601 10.018 13.6097 9.86322C13.6598 8.96496 13.8663 7.41514 13.7723 6.69933C13.6703 5.92505 13.6298 5.55031 13.4002 4.89934C13.1335 4.14476 12.3951 2.77225 11.8092 2.51671C11.0353 2.17974 9.80652 1.84666 9.10351 2.40548C7.8459 3.40509 8.62643 2.69792 7.74845 3.98241C7.22265 4.75217 7.00885 5.63998 6.75207 6.64884L6.54535 8.10015C6.37111 8.96248 6.46118 9.19868 6.25195 9.92846C6.3153 10.0686 6.36535 10.1208 6.45661 10.2829C6.81837 10.9256 6.94374 10.431 7.62456 10.5667L7.39082 10.6461L7.39113 10.6463Z" fill="#454845"></path>
		</svg>
        `;
    

navbar.appendChild(svgContainer);
navbar.appendChild(navtext);
navbar.appendChild(svgContainer2);

document.body.appendChild(navbar);

//  data
const data = [
    { imgRes: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/best-sellers.png', link: 'https://jamesmichelle.com/collections/jm-best-sellers', text: 'Best Sellers' },
    { imgRes: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/new.png', link: 'https://jamesmichelle.com/collections/jm-new-arrivals', text: 'New' },
    { imgRes: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/necklaces.png', link: 'https://jamesmichelle.com/collections/necklaces', text: 'Necklaces' },
    { imgRes: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/rings.png', link: 'https://jamesmichelle.com/collections/rings', text: 'Rings' },
    { imgRes: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/bracelets.png', link: 'https://jamesmichelle.com/collections/bracelets', text: 'Earrings' },
    { imgRes: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/personalized.png', link: 'https://jamesmichelle.com/collections/personalized', text: 'Personalized' },
    { imgRes: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/fine.png', link: 'https://jamesmichelle.com/collections/fine', text: 'Fine' },
    { imgRes: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/clearance.png', link: 'https://jamesmichelle.com/collections/clearance', text: 'Clearance' },
    { imgRes: 'https://storage.googleapis.com/abtest-img-bucket/jmp-9.2-sub-category-images/jm-fine-sample.png', link: 'https://jamesmichelle.com/collections/fine-sample-sale', text: 'Sale' },
];



//containerScroll 
const containerScroll = document.createElement('div');
containerScroll.style.display = 'flex';
containerScroll.style.overflowX = 'auto';
containerScroll.style.scrollSnapType = 'x mandatory';
containerScroll.style.padding = '10px 0';
containerScroll.style.backgroundColor = '#fff';
containerScroll.style.borderBottom = '1px solid #eaeaea';
containerScroll.style.position = 'relative';
containerScroll.style.zIndex = '1000';


data.forEach(item => {
    const dataItem = document.createElement('a');
    dataItem.href = item.link;
    dataItem.style.display = 'flex';
    dataItem.style.flexDirection = 'column';
    dataItem.style.alignItems = 'center';
    dataItem.style.textDecoration = 'none';
    dataItem.style.scrollSnapAlign = 'center';
    dataItem.style.marginRight = '20px';

    const img = document.createElement('img');
    img.src = item.imgRes;
    img.alt = item.text;
    img.style.width = '80px';
    img.style.height = '80px';
    img.style.borderRadius = '50%';
    img.style.objectFit = 'cover';
    img.style.marginBottom = '5px';
    img.style.backgroundColor = '#f5f5f5';

    const text = document.createElement('span');
    text.textContent = item.text;
    text.style.color = '#333';
    text.style.fontSize = '14px';
    text.style.fontFamily = 'Arial, sans-serif';

    dataItem.appendChild(img);
    dataItem.appendChild(text);
    containerScroll.appendChild(dataItem);
});

document.body.appendChild(containerScroll);


//banner
const bannerSection = document.createElement('div');
bannerSection.style.backgroundImage = 'url(https://images.unsplash.com/photo-1600172454520-134a542a2255?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHNoYWRvd3xlbnwwfHwwfHx8MA%3D%3D)';
bannerSection.style.backgroundRepeat = 'no-repeat';
bannerSection.style.backgroundSize = 'cover';
bannerSection.style.height = '480px';
bannerSection.style.display = 'flex';
bannerSection.style.flexDirection = 'column';
bannerSection.style.justifyContent = 'center';
// bannerSection.style.alignItems = 'center';
bannerSection.style.fontSize = '24px';
bannerSection.style.color = '#333';
bannerSection.style.marginTop = '30px';

const text0 = document.createElement('div');
text0.textContent = 'up to';
text0.style.fontFamily = 'Arial, sans-serif';
text0.style.marginLeft = '90px';
text0.style.fontSize = '14px';
text0.style.fontWeight = '400';

const text1 = document.createElement('div');
text1.innerHTML = ' 30%  OFF <span style="font-size: 58px;">SITEWIDE</span>';
text1.style.fontFamily = 'Arial, sans-serif';
text1.style.textAlign = 'center';
text1.style.fontSize = '66px';
text1.style.fontWeight = '400';

const text2 = document.createElement('div');
text2.innerHTML = '30% OFF SITEWIDE | Code: <u><b>MEMORIAL30</b></u>';
text2.style.fontSize = '14px';
text2.style.textAlign = 'center';
text2.style.marginBottom = '6px';

const text3 = document.createElement('div');
text3.innerHTML = '20% Off Fine | Code: <u><b>FINE20</b></u>';  
text3.style.fontSize = '14px';
text3.style.fontWeight = '400';
text3.style.textAlign = 'center';


const button = document.createElement('div');
button.textContent = 'SHOP THE SALE';
button.style.backgroundColor = 'black';
button.style.color = 'white';
button.style.padding = '10px 20px';
button.style.border = 'none';
button.style.cursor = 'pointer';
button.style.margin = '0 auto';
button.style.marginTop = '20px';
button.style.fontSize = '13px';
button.style.fontFamily = 'Roboto, sans-serif';

const text4 = document.createElement('div');
text4.textContent = 'Excludes Gift Cards, Bridal Brands, Bridal Rings, Swimwear, Jewelery Sets, Shinery Products, Git Boxes and Ring Sizers.';
text4.style.fontSize = '12px';
text4.style.fontStyle = 'italic';
text4.style.marginInline = '40px';
text4.style.marginTop = '50px';
text4.style.textAlign = 'center';
text4.style.color = "black";

bannerSection.appendChild(text0);
bannerSection.appendChild(text1);
bannerSection.appendChild(text2);
bannerSection.appendChild(text3);
bannerSection.appendChild(button);
bannerSection.appendChild(text4);

document.body.appendChild(bannerSection);

// Cards
const cardContainer = document.createElement('div');
cardContainer.style.display = 'flex';
cardContainer.style.overflowX = 'auto';
cardContainer.style.scrollSnapType = 'x mandatory';
cardContainer.style.padding = '10px 0';
cardContainer.style.backgroundColor = '#fff';
cardContainer.style.borderBottom = '1px solid #eaeaea';
cardContainer.style.position = 'relative';
cardContainer.style.zIndex = '1000';
cardContainer.style.margin = '50px 0';

data.forEach(item => {
    const cardItem = document.createElement('a');
    cardItem.href = item.link;
    cardItem.style.display = 'flex';
    cardItem.style.flexDirection = 'column';
    cardItem.style.alignItems = 'center';
    cardItem.style.textDecoration = 'none';
    cardItem.style.scrollSnapAlign = 'center';
    cardItem.style.marginRight = '20px';

    const imgCard = document.createElement('img');
    imgCard.src = item.imgRes;
    imgCard.alt = item.text;
    imgCard.style.width = '160px';
    imgCard.style.height = '200px';
    imgCard.style.backgroundColor = '#f5f5f5';
    imgCard.style.objectFit = 'cover';
    imgCard.style.marginleft = '1px';
    imgCard.style.marginBottom = '10px';

    const text = document.createElement('span');
    text.textContent = item.text;
    text.style.color = '#333';
    text.style.fontSize = '13px';
    text.style.fontFamily = 'Arial, sans-serif';
    text.style.fontWeight = 'bold';
    text.style.letterSpacing = '1px'
    text.style.textAlign = 'center';
    text.style.margin = '10px 0';
    text.style.textTransform = 'uppercase';

    cardItem.appendChild(imgCard);
    cardItem.appendChild(text);
    cardContainer.appendChild(cardItem);
});

document.body.appendChild(cardContainer);