# Ng2-c3 Documentation

  Ng2-c3 is an Angular 2 component to C3.js charting library.
  # References
    - c3js library [http://c3js.org] 
    - Angular 2 https://angular.io/
  #Build Steps
    - npm install
    - npm start
    - Server would start at http://localhost:8080/webpack-dev-server/
  #Usage Manual
      #Example 
          For creating a Line Chart
          Create a Wrapper and include ng2-c3 component 
          <div style="width:500px;height:500px">
              <ng2-c3 [data]="data"></ng2-c3>
          </div>
          _data to be passed from corresponding component.
          