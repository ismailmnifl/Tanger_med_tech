import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();


class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ffffff', ui: '#37474f', bg: '#222222'}
  }
  toggleTheme= () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  }
  render() { 
    return (
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
 
export default ThemeContextProvider;