(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{31:function(A,e,t){},32:function(A,e,t){"use strict";t.r(e);var c=t(0),g=t(19),C=t.n(g),n=t(17),o=t(9),B=t(1),Q=Object(c.createContext)();function a(A){var e=Object(c.useState)(""),t=Object(o.a)(e,2),g=t[0],C=t[1],a=Object(c.useState)([]),E=Object(o.a)(a,2),m=E[0],M=E[1],i=Object(c.useState)([]),w=Object(o.a)(i,2),s=w[0],J=w[1],I=Object(c.useRef)();return Object(c.useEffect)((function(){var A=localStorage.getItem("data"),e=localStorage.getItem("completed");A&&M(JSON.parse(A)),e&&J(JSON.parse(e))}),[]),Object(c.useEffect)((function(){localStorage.setItem("data",JSON.stringify(m)),localStorage.setItem("completed",JSON.stringify(s))})),Object(B.jsx)(Q.Provider,{value:{focusInput:I,todo:g,storage:m,handleClick:function(A){A.preventDefault(),""!==g&&(M([].concat(Object(n.a)(m),[g])),C(""),I.current.focus())},handleDone:function(A){J([].concat(Object(n.a)(s),[m[A]])),M((function(e){return e.filter((function(t){return e.indexOf(t)!==A}))}))},handleChange:function(A){C(A.target.value)},completed:s,handleCompleted:function(A){J((function(e){return e.filter((function(t){return e.indexOf(t)!==A}))}))}},children:A.children})}var E=function(A){var e=Object(c.useContext)(Q).handleDone,t=Object(c.useState)(!1),g=Object(o.a)(t,2),C=g[0],n=g[1];return Object(B.jsxs)("div",{className:"todoItem",children:[Object(B.jsx)("p",{className:C?"hoveredTodo":"notHoveredTodo",children:A.item}),Object(B.jsx)("button",{className:"todoDone",onClick:function(){return e(A.index)},onMouseEnter:function(){return n(!0)},onMouseLeave:function(){return n(!1)},children:C?"\u2714\ufe0f":"\u274c"})]},A.key)};var m=function(A){var e=Object(c.useContext)(Q),t=e.handleClick,g=e.storage,C=e.todo,n=e.handleChange,o=e.focusInput,a=g.map((function(A,e){return Object(B.jsx)(E,{item:A,index:e},e)}));return Object(B.jsxs)("div",{className:"todoContainer",children:[Object(B.jsxs)("form",{children:[Object(B.jsx)("input",{type:"text",ref:o,value:C,onChange:n}),Object(B.jsx)("button",{onClick:t,className:"todoAdd",children:"Add"})]}),a]})},M=t(8);var i=function(){return Object(B.jsxs)("header",{children:[Object(B.jsx)(M.b,{to:"/",children:Object(B.jsx)("h2",{children:"Add todo"})}),Object(B.jsx)(M.b,{to:"/completed",children:Object(B.jsx)("h2",{children:"Completed"})})]})};var w=function(){var A=Object(c.useContext)(Q),e=A.completed,t=A.handleCompleted,g=e.map((function(A,e){return Object(B.jsxs)("div",{className:"todoItem",children:[Object(B.jsx)("p",{children:A}),Object(B.jsx)("img",{onClick:function(){return t(e)},className:"todoDone",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABhfSURBVHic7d1brGZnWQfw/5TpYUoppSCKHCJESgWNqGCBgFTESMBDoqCRKBfGcGUEjIkJXBjRC7lSTPAUTRCDohhRIEAQQuUQORoEVORQilYInZnudqbM7pTdvb1Y00yL7XRm9vd9z3v4/ZKVtlfr+bq/51n/9a7DdyDAOh1KcnWSJ5zark7y2CSXJXlgkgcneVCSg1UFFtlJcjzJrUm+nuS2JNcn+a8kn03yuST/meT2qgJhdAeqC4DBHEzyvUmee2p7ZpJLSivq106Sf0vynlPbB5KcLK0IAL7JDyT5kyxntHu2tWy3JnlDlmDl5AWAMt+a5NVJbkj9wXG27UtJfivJw+/vjwQAq/KYJK/Ncu26+kA4+3Z7lpWXR5/xLwYA+/DwJH+a5Tp09YHPds/tZJI/SvKw+/zrAcA5uiDJS5IcTv2Bznbm7eYkL0vygHv9SwLAWfq+JB9N/YHNdm7bh7M8jQEA5+ylWa4xVx/MbOe33Z5lNQAAzsrlSd6U+gOYbTXbW5I8JABwBlcn+WLqD1q21W6fT3JVAOBePCXJTak/WNnWsx1N8vQAwN08J8mx1B+kbOvdbkvyvABAkhfEs/0zbSeTPD8ATO2aLGeF1Qcl22a3E1l+qAmm5Qc1mNmTkrw/yZXVhVDi1iQ/lORT1YVABQGAWT0iyceSPLK6EEr9T5KnJvladSGwaRdUFwAFLsjys7IO/jw6yV/Hq4OZkC89M/rNJL9UXQTNeGySnSyXgwAY1HOyDPvqm9BsbW07Sa4NTMQ9AMzkUJJ/z3LGB9/sv5M8McnXqwuBTXAJgJm8OslPVBdBsx6cZDfJ+6oLgU2wAsAsrsryuNfF1YXQtDuy/IzwZ6sLgXXzFACz+MM4+HP/Lkry2uoiYBOsADCDZye5rroIuvKsJB+sLgLWyQoAM3hVdQF055XVBcC6WQFgdN+f5OPxXefc/WCWt0XCkKwAMLpXxcGf8/Mb1QXAOhmMjOzhSW5McmF1IXRpJ8mj4ncCGJQVAEb24jj4c/4OJvnZ6iJgXawAMLJPZLkHoCV7ST6c5D1JPpnkhiS3VBZU6Iosb2V8cpLnJrkm7c2kj2W5FwCATjwx9e+Xv/t2R5LXxWuIz+RxWd7XcEfq/153365e54cGYLV+PfUHjru2tyZ5/Ho/7lCuSvK21P/d7tpesd6PC8AqvSP1B47dJL+b9pa1e3Agy134d6b+7/jWNX9WAFbkwiTHUnvQ2EnywnV/0Am8KPU/33xrlhsCAWjcM1J/1viytX/Kefxa6v+e16z9UwKwby9P7cHiz9f/Eafz+tT+TX917Z8QgH3749QdKG5OcuX6P+J0rkhyNHV/19et/yPCZnkRECN6QuG+fydLCGC1bslyQ2WVyu8UAGfpK6k5S7wpySUb+HyzuiTJkdT8bW/cwOeDjbICwGguS/KIon2/KcntRfuewe1J/rZo39+e5NKifcNaCACM5orCfb+rcN+zqPp/fCC13y1YOQGA0TyocN8fKdz3LP6lcN+XF+4bVk4AYDSXFe336KmN9TqcZKto35XhElZOAGA0VUPanf+bU/X/uipcwloIAIzmUNF+3fy3OSeK9usmQIYiAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATOhAdQEFfi/Jd1cXwdo8LMmTC/Z7W5IPF+x3Rk9LclnBfj+Z5EjBftmMzyR5RXURmzRjAPhAkmdWFwFAUz6Y5FnVRWySSwAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJnSwuoACb0zyoeoiAGjKDdUFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQPcOVBcwoYuS/FR1EQCN+cckd1QXMRMBYPMOJjmZ5ILqQgAasZfl5GinupCZOAht3k6SreoiABpyNA7+GycA1LipugCAhpiJBQSAGl+rLgCgIWZiAQGghrQLcJqZWEAAqOHLDnCamVhAAKjhyw5wmplYQACo4csOcJqZWEAAqOHLDnCamVhAAKjhyw5wmplYQACo4ZEXgNPMxAICQA1pF+A0M7GA3wKocyLJoeoiAIptJ7m0uogZWQGoc7i6AIAGOPsvIgDU8aUHcP2/jABQx5cewMlQGQGgji89gFlYRgCo40sPYBaWEQDq+NIDmIVlBIA6vvQAZmEZAaCOLz2AWVhGAKjjKQAAs7CMAFBH6gUwC8t4FXCdg0lORggD5rWX5KIkO9WFzMjBp85Okq3qIgAKHY2DfxkBoJalL2BmZmAhAaCWm1+AmZmBhQSAWtIvMDMzsJAAUMuXH5iZGVhIAKjlyw/MzAwsJADU8uUHZmYGFhIAavnyAzMzAwsJALV8+YGZmYGFBIBaHoEBZmYGFhIAakm/wMzMwEJ+C6DeiSSHqosA2LDtJJdWFzEzKwD1DlcXAFDA2X8xAaCeJgBm5Pp/MQGgniYAZuTkp5gAUE8TADMy+4oJAPU0ATAjs6+YAFBPEwAzMvuKCQD1NAEwI7OvmABQTxMAMzL7igkA9TQBMCNPQBUTAOppAmBGTn6KeRVwvYNJTkYYA+axl+SiJDvVhczMQafeTpKt6iIANuhoHPzLCQBtsBQGzMTMa4AA0Ab3AQAzMfMaIAC0QRoGZmLmNUAAaINmAGZi5jVAAGiDZgBmYuY1QABog2YAZmLmNUAAaINmAGZi5jVAAGiDZgBm4imABggAbdAMwEyc9DRAAGiDZgBmYuY1wG8BtONEkkPVRQCs2XaSS6uLwApASw5XFwCwAc7+GyEAtENTADNwz1MjBIB2aApgBk52GiEAtENTADMw6xohALRDUwAzMOsaIQC0Q1MAMzDrGiEAtENTADMw6xohALRDUwAzMOsaIQC0Q1MAM/DEUyMEgHZoCmAGTnYa4VXA7TiY5GSEMmBce0kuSrJTXQgONi3ZSbJVXQTAGh2Ng38zBIC2WBoDRmbGNUQAaIvmAEbmXqeGCABt0RzAyJzkNORgdQHcg+bYv28kua1gvw9IcnnBfveS3FKw3yS5IjU3Eh9LcmfBfi9LcmHBfkfiZ88bIgC0RQDYv3cn+fGC/X5Pkk8V7PdYkisL9psswePBBft9ZpJPF+z37UleULDfkVjlbIhLAG0RAICRmXENEQDaojmAkZlxDREA2qI5gJG5BNAQAaAtmgMYmZOchggAbdEcwMjMuIYIAG05lmS7ugiANdhOcry6CE4TANrjOVlgRM7+GyMAtEeTACNyj1NjBID2aBJgRE5uGiMAtEeTACMy2xojALRHkwAjMtsaIwC0R5MAIzLbGiMAtEeTACMy2xojALRHkwAjMtsaIwC0R5MAI/KEU2MEgPZoEmBETm4aIwC053CS3eoiAFZoL8mR6iK4JwGgPTtJtqqLAFiho1lmGw0RANpkqQwYiZnWIAGgTZoFGIl7mxokALRJswAjcVLTIAGgTZoFGImZ1iABoE2HqwsAWCEBoEECQJtcAgBGIgA0SABok2YBRmKmNUgAaJNmAUZiVbNBAkCbNAswEic1DRIA2qRZgJGYaQ0SANp0LMl2dREAK7Cd5Hh1Efx/AkC7PAoIjMDZf6MEgHZpGmAE7mlqlADQLk0DjMDJTKMEgHZpGmAEZlmjBIB2aRpgBGZZowSAdmkaYARmWaMEgHZpGmAEZlmjBIB2aRpgBGZZowSAdmkaYASeaGqUANAuTQOMwMlMowSAdh1OsltdBMA+7CU5Ul0E904AaNdOkq3qIgD24WiWWUaDBIC2WToDeuZSZsMEgLYJAEDPzLCGCQBtk56BngkADRMA2qZ5gJ6ZYQ0TANp2uLoAgH0QABomALTNJQCgZwJAwwSAtmkeoGdmWMMEgLZpHqBnVjEbJgC0TQAAemaGNUwAaJv0DPRMAGiYANC2Y0m2q4sAOA/bSY5XF8F9EwDa51FAoEfO/hsnALRPEwE9cgmzcQJA+zQR0CMnL40TANqniYAemV2NEwDap4mAHpldjRMA2qeJgB6ZXY0TANqniYAemV2NEwDap4mAHrmBuXECQPsEAKBHZlfjBID2SdFAjwSAxgkA7TucZLe6CIBzsJfkSHURnJkA0L6dJFvVRQCcg6NZZhcNEwD6YCkN6IlLlx0QAPogAAA9MbM6IAD0QZoGeiIAdEAA6INmAnpiZnVAAOjD4eoCAM6BANABAaAPLgEAPREAOiAA9EEzAT0xszogAPRBMwE9sWrZAQGgDwIA0BMzqwMCQB+kaaAnAkAHBIA+HEuyXV0EwFnYTnK8ugjunwDQD48CAj1w9t8JAaAfmgrogUuWnRAA+iEAAD0wqzohAPRDqgZ6IAB0QgDoh6YCeuBkpRMCQD8EAKAHbljuhADQDwEA6IFZ1QkBoB+aCuiBSwCdEAD6IQAAPTCrOiEA9EOqBnogAHRCAOjH4SS71UUAnMFekiPVRXB2BIB+7CTZqi4C4AyOZplVdEAA6IulNaBlLlV2RADoiwAAtMyM6ogA0BfpGmiZANARAaAvmgtomRnVEQGgL16xCbRMAOiIANAXlwCAlgkAHREA+qK5gJaZUR0RAPqiuYCWWaXsiADQFwEAaJkZ1REBoC/SNdAyAaAjAkBfjiXZri4C4F5sJzleXQRnTwDoj0cBgRY5+++MANAfTQa0yCXKzggA/REAgBaZTZ0RAPojZQMtEgA6IwD0R5MBLXJy0hkBoD9uAgRaZDZ1RgDoj5QNtMjqZGcEgP5oMqBFTk46IwD0RwAAWmQ2dUYA6I+UDbRIAOiMANCfw0l2q4sAuJu9JEeqi+DcCAD92UmyVV0EwN0czTKb6IgA0CdLbUBLXJrskADQJwEAaImZ1CEBoE/SNtASAaBDAkCfNBvQEjOpQwJAn7xyE2iJANAhAaBPLgEALREAOiQA9EmzAS0xkzokAPRJswEtsSrZIQGgTwIA0BIzqUMCQJ+kbaAlAkCHBIA+HUuyXV0EQJZZdLy6CM6dANAvjwICLbAi2SkBoF+W3IAWmEWdEgD6pemAFphFnRIA+mXZDWiBANApAaBfmg5ogZORTgkA/XITINACs6hTAkC/pG6gBVYjOyUA9EvTAS1wMtIpAaBfAgDQArOoUwJAvzQd0AKzqFMCQL9uSrJbXQQwtd0kR6qL4PwIAP3aSbJVXQQwtZuzzCI6JAD0zdIbUMkNgB0TAPomAACVzKCOCQB9k76BSgJAxwSAvmk+oJIZ1DEBoG9ewQlUEgA6JgD0zSUAoJIA0DEBoG+aD6jkJKRjAkDfBACgkhnUMQGgb5oPqGQGdUwA6JvlN6CSANAxAaBvx5JsVxcBTGk7yfHqIjh/AkD/PAoIVLAC2TkBoH+W4IAKZk/nBID+aUKggtnTOQGgf5bhgAoCQOcEgP5pQqCCk4/OCQD9cxMgUMHs6ZwA0D8pHKhg9bFzAkD/NCFQwclH5wSA/gkAQAWzp3MCQP80IVDB7OmcANC/m5LsVhcBTGU3yZHqItgfAaB/O0m2qosApnJzltlDxwSAMViKAzbJDYADEADGIAAAm2TmDEAAGINmBDbJzBmAADAGy3HAJpk5AxAAxuCVnMAmmTkDEADGII0Dm+QSwAAEgDFoRmCTnHQMQAAYgwAAbJKZM4CD1QWwEprxtMckeWnBfh9ZsM8kuSg1n/eufVd4YZKnF+z3MQX7bJV7AAZwoLoAVuLyJLdWFwFM4/Ikx6uLYH8EgHGcSHKoughgeNtJLq0ugv1zD8A4LMkBm+AGwEEIAONwHwCwCWbNIASAcWhKYBPMmkEIAOOwLAdsggAwCAFgHJoS2AQnG4MQAMbhJkBgE8yaQQgA45DKgU2w2jgIAWAcmhLYBCcbgxAAxiEAAJtg1gxCABiHpgQ2wawZhFcBj+NgkpMR6oD12U1ycZKd6kLYPweLcewk2aouAhjazXHwH4YAMBZLc8A6uQFwIALAWAQAYJ3MmIEIAGPRnMA6mTEDEQDGYnkOWCczZiACwFi8ohNYJzNmIALAWCzPAetkxgxEABiL5TlgncyYgQgAY5HOgXUyYwYiAIxFcwLrZMYMRAAYi+U5YJ0EgIH4LYDxbCe5pLoIYDjbSS6tLoLVsQIwHgkdWAcrjIMRAMYjAADrYLYMRgAYjyYF1sFsGYwAMB7LdMA6CACDEQDGo0mBdXByMRgBYDze1Q2sg9kyGAFgPFI6sA5WFwcjAIxHkwLr4ORiMALAeAQAYB3MlsEIAOPRpMA6mC2D8Srg8RxMcjLCHbA6u0kuTrJTXQir4yAxnp0kW9VFAEM5Ggf/4QgAY7JUB6ySmTIgAWBMmhVYJTNlQALAmDQrsEpmyoAEgDF5XhdYJTNlQALAmLyyE1glM2VAAsCYLNcBq2SmDEgAGJPlOmCVzJQBCQBjktaBVTJTBiQAjEmzAqtkpgxIABiTZgVWyUwZkN8CGNd2kkuqiwC6t53k0uoiWD0rAOOS2IFVcAPgoASAcQkAwCqYJYMSAMalaYFVMEsGJQCMS9MCq2CWDEoAGJfrdsAqmCWDEgDG5d3dwCqYJYMSAMYltQOrYJYMSgAYl+t2wCqYJYMSAMalaYFVMEsGJQCMS9MCq2CWDMqrgMd1MMnJCHnA+dtNcnGSnepCWD0Hh3HtJNmqLgLo2tE4+A9LABibpTtgP8yQgQkAY9O8wH6YIQMTAMbm+V1gP8yQgQkAY/tqdQFA175SXQDrIwCMTQAA9sMMGZgAMDbNC+yHFYCBCQBju7G6AKBr/1tdAOvjRUBje2iSI9VFAF3aS3JlkluqC2E9rACM7WiSL1cXAXTpi3HwH5oAML5/rS4A6JLZMTgBYHyfqC4A6JIAMDgBYHzvrS4A6NI/VRfAerkJcHwXZLmT99uqCwG68ZUkj8pyIyCDsgIwvt0k76wuAujK2+LgPzwBYA5vry4A6Mrbqgtg/VwCmMOhLC8FurK6EKB5R7Is/5+sLoT1sgIwh+0kf1FdBNCFP4uD/xSsAMzjO5N8Lv7mwH3bS3JVki9UF8L6WQGYxxfikUDgzN4dB/9pCABz+e3qAoCmvaa6ADZHAJjL+2MVALh370ryvuoi2BzXg+fz1CQfib89cNpekqcl+Wh1IWyOFYD5fCzJP1QXATTlzXHwn46zwDk9MslnklxRXQhQ7liSJ2V5VwgTeUB1AZQ4nqXpX1BdCFDuV5JcV10Em2cFYF4Hsvza149UFwKUuS7Jc+K9/1MSAOb2uCQfT/KQ6kKAjbs5yVOSfKm6EGq4CXBu1yf5uSR3VhcCbNRukl+Ig//U3APA9VmW/364uhBgY16Z5PXVRVDLJQCS5Xvw5iQ/U10IsHZ/k+Tn47r/9AQA7nJRkr+PJwNgZO9O8pPxa39EAOCeDiV5R5Jri+sAVu9DSX4syderC6ENbgLk7raznB18sLoQYKU+kOR5cfDnbgQAvtnxJM9N8lfVhQAr8XdZzvxvqy6EtngKgHtzZ5K3nPr3awvrAPbnD5L8cpJvVBdCewQAzuS6JF9O8qNZbhIE+nBblgP/a+Juf+6DmwA5G49N8sYkT68uBLhfH0/y4iSfry6EtlkB4GzckuQvk1yc5Jq4dwRatJPljP8XkxwuroUOWAHgXF2d5Pez3FQEtOF9SV6W5NPVhdAPZ3Kcq89meZzoRUluqC0Fpnd9kp/O8ot+Dv7AxlyY5CVZBs+ezWbb2PapLL13YeA8uQTAKhxI8vwkL8/yo0LuLYHVuzPJe5O8Nsk7swQBOG8CAKv20Cw/KvSSJM+I7xjs138kecOp7avFtTAQw5l1+o4sLxK6NsmzT/03cGZfSvLPWd7DcV2Wd3HAygkAbNKjk3xXkscnecKpf35LkockeeCp7bKy6mD9jic5keWd/FtZHtf73Knt81nO9m8sq46p/B+1Em31GFeuTQAAAABJRU5ErkJggg=="})]},e)}));return Object(B.jsxs)("div",{className:"todoContainer",children:[Object(B.jsxs)("h3",{style:{color:e.length>0?"green":"#E8070B"},children:["Tasks completed: ",e.length]}),g]})},s=t(2);var J=function(){return Object(B.jsxs)("div",{className:"container",children:[Object(B.jsx)(i,{}),Object(B.jsxs)(s.c,{children:[Object(B.jsx)(s.a,{exact:!0,path:"/",children:Object(B.jsx)(m,{})}),Object(B.jsx)(s.a,{path:"/completed",children:Object(B.jsx)(w,{})})]})]})};t(31);C.a.render(Object(B.jsx)(a,{children:Object(B.jsx)(M.a,{children:Object(B.jsx)(J,{})})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.bb95cea2.chunk.js.map