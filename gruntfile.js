module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      default: {
        files: [
          'app/**/*.css'
        ],
        tasks: [
          'styles'
        ]
      }
    },
    myth: {
      default: {
        files: {
          'public/dist/bundle.css': 'app/styles/app.css'
        }
      }
    }
  })

  require('load-grunt-tasks')(grunt)

  grunt.registerTask('styles', [
    'myth'
  ])

  grunt.registerTask('default', [
    'myth',
    'watch'
  ])
}
