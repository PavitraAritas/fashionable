import React from 'react';
import ThemeBox from '../StyledComponents/theme';

function Theme() {
  return (
      <ThemeBox>
          <ThemeBox.Card>
              <h2>Customize your view</h2>
              <p>Manage your font-size, color, and background</p>

      <ThemeBox.FontSize>
          <h4>Font Size</h4>
          <div>
              <h6>Aa</h6>
              <ThemeBox.Size>
                  <span class="font-size-1"></span>
                  <span class="font-size-2 active"></span>
                  <span class="font-size-3"></span>
                  <span class="font-size-4"></span>
                  <span class="font-size-5"></span>
              </ThemeBox.Size>
              <h3>Aa</h3>
          </div>
      </ThemeBox.FontSize>

      <ThemeBox.Color>
          <h4>Color</h4>
          <ThemeBox.ChooseColor>
              <span className='color-1 active'></span>
              <span className='color-2'></span>
              <span className='color-3'></span>
              <span className='color-4'></span>
              <span className='color-5'></span>
          </ThemeBox.ChooseColor>
      </ThemeBox.Color>

      <ThemeBox.Background>
          <h4>Background</h4>
          <ThemeBox.ChooseBg>
              < ThemeBox.Bg1>
                  <span></span>
                  <h5 for="bg-1 active">Light</h5>
              </ThemeBox.Bg1>
              <ThemeBox.Bg2>
                  <span></span>
                  <h5 for="bg-2">Dim</h5>
              </ThemeBox.Bg2>
              < ThemeBox.Bg3>
                  <span></span>
                  <h5 for="bg-3">Dark</h5>
              </ThemeBox.Bg3>
          </ThemeBox.ChooseBg>
      </ThemeBox.Background>
      </ThemeBox.Card>
      </ThemeBox>
  )
 
}

export default Theme;
